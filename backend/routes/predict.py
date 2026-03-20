from flask import Blueprint, request, jsonify, current_app
from services.inference_service import predict_image
import os

predict_bp = Blueprint("predict", __name__)

def allowed_file(filename: str) -> bool:
    if "." not in filename:
        return False
    extension = filename.rsplit(".", 1)[1].lower()
    return extension in current_app.config["ALLOWED_EXTENSIONS"]

@predict_bp.route("/predict", methods=["POST"])
def predict():
    if "file" not in request.files:
        return jsonify({"error": "No file part in request"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No file selected"}), 400

    if not allowed_file(file.filename):
        return jsonify({"error": "Invalid file type"}), 400

    try:
        result = predict_image(file)
        return jsonify(result), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
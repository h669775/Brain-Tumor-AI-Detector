from flask import Flask
from flask_cors import CORS
from config import Config
from routes.predict import predict_bp
import os

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    CORS(app)

    os.makedirs(app.config["UPLOAD_FOLDER"], exist_ok=True)
    os.makedirs(app.config["MODEL_FOLDER"], exist_ok=True)

    app.register_blueprint(predict_bp)

    @app.route("/")
    def home():
        return {
            "message": "Brain Tumor AI Detector backend is running"
        }

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
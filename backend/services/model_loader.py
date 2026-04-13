import os
import json
import tensorflow as tf

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODEL_PATH = os.path.join(BASE_DIR, "models", "resnet50_best.keras")
CLASS_NAMES_PATH = os.path.join(BASE_DIR, "models", "class_names.json")

_model = None
_class_names = None

def load_model_and_labels():
    global _model, _class_names

    if not os.path.exists(MODEL_PATH):
        raise FileNotFoundError(
            "Model file not found. Download 'resnet50_best.keras' from GitHub Releases and place it in backend/models/."
        )

    if not os.path.exists(CLASS_NAMES_PATH):
        raise FileNotFoundError(
            "class_names.json not found in backend/models/."
        )

    if _model is None:
        print("Loading model...")
        _model = tf.keras.models.load_model(MODEL_PATH)

    if _class_names is None:
        print("Loading class names...")
        with open(CLASS_NAMES_PATH, "r") as f:
            _class_names = json.load(f)

    return _model, _class_names
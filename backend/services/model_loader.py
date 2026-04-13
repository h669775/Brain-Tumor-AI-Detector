import os
import json
import tensorflow as tf

# Get backend root folder
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Paths to your files
MODEL_PATH = os.path.join(BASE_DIR, "models", "resnet50_best.keras")
CLASS_NAMES_PATH = os.path.join(BASE_DIR, "models", "class_names.json")

# Cache variables (so we don't reload every time)
_model = None
_class_names = None


def load_model_and_labels():
    global _model, _class_names

    # Load model only once
    if _model is None:
        print("Loading model...")
        _model = tf.keras.models.load_model(MODEL_PATH)

    # Load class names only once
    if _class_names is None:
        print("Loading class names...")
        with open(CLASS_NAMES_PATH, "r") as f:
            _class_names = json.load(f)

    return _model, _class_names
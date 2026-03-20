import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

class Config:
    DEBUG = True
    UPLOAD_FOLDER = os.path.join(BASE_DIR, "uploads")
    MODEL_FOLDER = os.path.join(BASE_DIR, "models")
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg"}
    IMAGE_SIZE = (256, 256)
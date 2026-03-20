from utils.image_preprocessing import preprocess_uploaded_file

def predict_image(file_storage):
    processed = preprocess_uploaded_file(file_storage)

    # MOCK RESPONSE FOR NOW
    # Later replace this with real model inference
    return {
        "prediction": "glioma",
        "confidence": 0.93,
        "all_probabilities": {
            "glioma": 0.93,
            "meningioma": 0.04,
            "notumor": 0.02,
            "pituitary": 0.01
        },
        "image_shape": processed["shape"],
        "model_used": "mock-resnet50"
    }
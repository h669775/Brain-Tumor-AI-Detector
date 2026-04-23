import numpy as np
from services.model_loader import load_model_and_labels
from utils.image_preprocessing import preprocess_uploaded_file

def predict_image(file_storage):
    model, class_names = load_model_and_labels()

    # Preprocess image
    processed_image = preprocess_uploaded_file(file_storage)

    # Run prediction
    predictions = model.predict(processed_image)
    probabilities = predictions[0]

    # Get best class
    predicted_index = int(np.argmax(probabilities))
    predicted_label = class_names[predicted_index]
    confidence = float(probabilities[predicted_index])

    all_probabilities = {
        class_names[i]: float(probabilities[i])
        for i in range(len(class_names))
    }

    return {
        "prediction": predicted_label,
        "confidence": confidence,
        "all_probabilities": all_probabilities,
        "model_used": "ResNet50"
    }
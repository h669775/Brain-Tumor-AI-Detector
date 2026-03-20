def format_prediction_response(prediction, confidence, probabilities, model_name):
    return {
        "prediction": prediction,
        "confidence": confidence,
        "all_probabilities": probabilities,
        "model_used": model_name
    }
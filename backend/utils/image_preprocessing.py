from PIL import Image
import numpy as np

def preprocess_uploaded_file(file_storage):
    image = Image.open(file_storage.stream).convert("RGB")
    image = image.resize((256, 256))

    array = np.array(image)

    return {
        "image_array": array,
        "shape": array.shape
    }
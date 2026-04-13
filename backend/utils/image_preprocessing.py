from PIL import Image
import numpy as np
import tensorflow as tf

def preprocess_uploaded_file(file_storage):
    image = Image.open(file_storage.stream).convert("RGB")
    image = image.resize((256, 256))

    image_array = np.array(image, dtype=np.float32)

    image_array = tf.keras.applications.resnet.preprocess_input(image_array)
    image_array = np.expand_dims(image_array, axis=0)

    return image_array
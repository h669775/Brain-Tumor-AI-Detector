# Brain Tumor AI Detector

A web application that classifies brain MRI scans using a deep learning model. Upload an MRI image and receive an instant AI-powered prediction across four categories.

> **Disclaimer:** This is a demonstration project for educational purposes only. Results are not medically reliable and must not be used for diagnosis. Always consult a qualified medical professional.

---

## Features

- Drag-and-drop or click-to-upload MRI image input (PNG, JPG, JPEG)
- Real-time classification into four categories: **Glioma**, **Meningioma**, **No Tumor**, **Pituitary**
- Confidence score with visual breakdown for all classes
- ResNet50 model trained in Google Colab — reported accuracy: **95.06%**

---

## Tech Stack

| Layer     | Technology                                      |
|-----------|-------------------------------------------------|
| Frontend  | React 18, TypeScript, Vite, Tailwind CSS, Radix UI |
| Backend   | Python 3.12, Flask, Flask-CORS                  |
| ML        | TensorFlow / Keras, ResNet50, NumPy, Pillow     |

---

## Project Structure

```
Brain-Tumor-AI-Detector/
├── backend/
│   ├── app.py                    # Flask entry point (port 5000)
│   ├── config.py                 # App configuration
│   ├── requirements.txt
│   ├── models/
│   │   ├── resnet50_best.keras   # Model file (download separately — see below)
│   │   ├── class_names.json      # Class label definitions
│   │   └── config.json           # Image size and preprocessing config
│   ├── routes/
│   │   └── predict.py           # POST /predict endpoint
│   ├── services/
│   │   ├── model_loader.py
│   │   └── inference_service.py
│   └── utils/
│       ├── image_preprocessing.py
│       └── response_helpers.py
└── frontend/
|    ├── index.html
|   ├── vite.config.ts
|    └── src/
|        └── app/
|            ├── pages/            # Landing, Upload, Loading, Result
|            └── components/      # Navbar, UI components
└── notebooks
    ├──All_Model.ipynb
    ├── ResNetModel.ipynb
```

---

## Setup

### Prerequisites

- Python 3.12
- Node.js + npm
- The model file `resnet50_best.keras` (see below)

### 1. Download the model

The model file is too large to include in the repository. Download `resnet50_best.keras` from [GitHub Releases](../../releases) and place it at:

```
backend/models/resnet50_best.keras
```

### 2. Backend

```bash
cd backend
python3.12 -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
python -m pip install -r requirements.txt
python app.py
```

The backend runs at `http://127.0.0.1:5000`.

### 3. Frontend

```bash
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## How It Works

1. User uploads an MRI image on the Upload page.
2. The image is sent to the backend's `POST /predict` endpoint.
3. Backend resizes the image to 256×256 and applies ResNet50 preprocessing.
4. The model outputs probabilities for all four classes.
5. Results are returned to the frontend and displayed with a confidence breakdown.

The model only performs inference — it does not learn or update during use.

---

## Possible Improvements

- Evaluate and compare additional model architectures
- Train on a larger and more diverse dataset
- Add Grad-CAM heatmap visualization to highlight regions of interest
- Add evaluation metrics display (precision, recall, confusion matrix)
- Improve mobile responsiveness and accessibility

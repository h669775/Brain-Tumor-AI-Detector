import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { CheckCircle2, Upload, ExternalLink } from 'lucide-react';

// Mock predictions - in a real app, this would come from the AI model
const mockPredictions = [
  { label: 'Glioma', confidence: 93 },
  { label: 'Meningioma', confidence: 89 },
  { label: 'Pituitary Tumor', confidence: 91 },
  { label: 'No Tumor', confidence: 88 },
];

export function Result() {
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [prediction] = useState(() => {
    // Randomly select a prediction for demo purposes
    return mockPredictions[Math.floor(Math.random() * mockPredictions.length)];
  });

  useEffect(() => {
    // Retrieve the preview URL from sessionStorage
    const stored = sessionStorage.getItem('mriPreview');
    if (stored) {
      setPreviewUrl(stored);
    } else {
      // If no preview, redirect to upload
      navigate('/upload');
    }
  }, [navigate]);

  const handleUploadAnother = () => {
    sessionStorage.removeItem('mriPreview');
    navigate('/upload');
  };

  if (!previewUrl) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-600 mb-4">
            <CheckCircle2 className="w-4 h-4" />
            <span className="text-sm font-medium">Analysis Complete</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900">
            Detection Results
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* MRI Image */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Uploaded MRI Scan
            </h3>
            <div className="rounded-xl overflow-hidden bg-gray-100">
              <img
                src={previewUrl}
                alt="Analyzed MRI scan"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Results Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">
                Prediction
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Classification</span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900">
                    {prediction.label}
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Confidence</span>
                    <span className="text-2xl font-bold text-blue-500">{prediction.confidence}%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${prediction.confidence}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-amber-50 border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>Disclaimer:</strong> This is an AI prediction tool for educational purposes only. 
                  Always consult qualified medical professionals for diagnosis and treatment.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleUploadAnother}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
              >
                <Upload className="w-5 h-5" />
                Upload another image
              </button>
              
              <button
                onClick={() => window.open('https://www.cancer.gov/types/brain', '_blank')}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
              >
                Learn more
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

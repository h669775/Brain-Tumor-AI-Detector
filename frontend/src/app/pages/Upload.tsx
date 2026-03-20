import { useState, useRef } from 'react';
import { useNavigate } from 'react-router';
import { Navbar } from '../components/Navbar';
import { Upload as UploadIcon, X } from 'lucide-react';

export function Upload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setError(null);
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setError('Please select a valid image file.');
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) {
      setError('Please select an image first.');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      if (previewUrl) {
        sessionStorage.setItem('mriPreview', previewUrl);
      }

      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong during analysis.');
      }

      sessionStorage.setItem('predictionResult', JSON.stringify(data));

      navigate('/loading');
    } catch (err) {
      const message =
        err instanceof Error ? err.message : 'Failed to connect to backend.';
      setError(message);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    setError(null);

    sessionStorage.removeItem('mriPreview');
    sessionStorage.removeItem('predictionResult');

    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Upload MRI Scan
          </h1>
          <p className="text-gray-600">
            Upload a brain MRI scan to get an instant AI-powered classification
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          {!previewUrl ? (
            <div
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-16 text-center cursor-pointer transition-colors ${
                isDragging
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-300 hover:border-gray-400 bg-gray-50'
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                  <UploadIcon className="w-8 h-8 text-blue-500" />
                </div>

                <p className="text-lg font-medium text-gray-900 mb-2">
                  Drop your MRI scan here
                </p>
                <p className="text-gray-500 mb-4">or click to browse files</p>
                <p className="text-sm text-gray-400">
                  Supports: PNG, JPG, JPEG
                </p>
              </div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) handleFileSelect(file);
                }}
                className="hidden"
              />
            </div>
          ) : (
            <div className="space-y-6">
              <div className="relative rounded-xl overflow-hidden bg-gray-100">
                <button
                  onClick={clearFile}
                  className="absolute top-3 right-3 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100 transition-colors z-10"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>

                <img
                  src={previewUrl}
                  alt="MRI scan preview"
                  className="w-full h-auto max-h-96 object-contain"
                />
              </div>

              <div className="flex flex-col items-center gap-3">
                <p className="text-sm text-gray-600">{selectedFile?.name}</p>

                <button
                  onClick={handleAnalyze}
                  disabled={isAnalyzing}
                  className="px-8 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Image'}
                </button>

                {error && (
                  <p className="text-sm text-red-600 text-center">{error}</p>
                )}
              </div>
            </div>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Note: This is a demonstration tool. Always consult with medical professionals for diagnosis.
        </p>
      </main>
    </div>
  );
}
import { Link } from 'react-router';
import { ArrowRight, Brain, Zap, Shield } from 'lucide-react';
import {Navbar} from '../components/Navbar'

export function Landing() {

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      
      <Navbar />

      {/* Hero Section */}
      <main className="mx-auto max-w-7xl px-6 py-20">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 mb-6">
            <Zap className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by Deep Learning</span>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Brain Tumor Detection<br />using AI
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Upload an MRI scan and get instant classification using deep learning
          </p>
          
          <Link 
            to="/upload"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-blue-500 text-white text-lg font-medium hover:bg-blue-600 transition-colors shadow-lg shadow-blue-500/30"
          >
            Try Model
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <p className="text-sm text-gray-500 mt-4">
            Accuracy: 94.7% (ResNet50)
          </p>
        </div>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
          <div className="text-center p-8 rounded-2xl bg-white border border-gray-200">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 mb-4">
              <Brain className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Advanced AI Model
            </h3>
            <p className="text-gray-600">
              State-of-the-art ResNet50 architecture trained on thousands of MRI scans
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-white border border-gray-200">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 mb-4">
              <Zap className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Near Instant Results
            </h3>
            <p className="text-gray-600">
              Get accurate predictions in seconds with confidence scores
            </p>
          </div>
          
          <div className="text-center p-8 rounded-2xl bg-white border border-gray-200">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-50 mb-4">
              <Shield className="w-7 h-7 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Secure & Private
            </h3>
            <p className="text-gray-600">
              Your data is processed securely and never stored on our servers
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

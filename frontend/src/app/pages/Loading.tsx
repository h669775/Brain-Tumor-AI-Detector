import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Loader2 } from 'lucide-react';

export function Loading() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/result');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-50 mb-6">
          <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
        </div>

        <h2 className="text-2xl font-semibold text-gray-900 mb-3">
          Analyzing image...
        </h2>

        <p className="text-gray-600">
          Running deep learning model
        </p>

        <div className="mt-8 flex items-center justify-center gap-1">
          <div
            className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: '0ms' }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: '150ms' }}
          ></div>
          <div
            className="w-2 h-2 rounded-full bg-blue-500 animate-bounce"
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
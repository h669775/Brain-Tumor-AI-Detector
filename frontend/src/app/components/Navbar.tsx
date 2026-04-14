import { Link, useLocation} from 'react-router';
import { Brain } from 'lucide-react';

export function Navbar() {

  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">NeuroDetect</span>
          </Link>

        
          <div className="flex items-center gap-8">
            
            {!isLanding && (
            <Link 
              to="/" 
              className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            >
              Home Page
            </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

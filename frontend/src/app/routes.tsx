import { createBrowserRouter } from 'react-router';
import { Landing } from './pages/Landing';
import { Upload } from './pages/Upload';
import { Loading } from './pages/Loading';
import { Result } from './pages/Result';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Landing,
  },
  {
    path: '/upload',
    Component: Upload,
  },
  {
    path: '/loading',
    Component: Loading,
  },
  {
    path: '/result',
    Component: Result,
  },
  {
    path: '*',
    Component: () => (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">404</h1>
          <p className="text-gray-600">Page not found</p>
        </div>
      </div>
    ),
  },
]);

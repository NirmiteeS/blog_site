import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="container-custom py-20">
      <div className="max-w-lg mx-auto text-center">
        <h1 className="text-7xl md:text-9xl font-bold text-primary-500 dark:text-primary-400">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold mt-4 mb-6">Page Not Found</h2>
        <p className="text-dark-600 dark:text-light-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <Home size={18} className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
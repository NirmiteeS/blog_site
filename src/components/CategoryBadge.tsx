import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryBadgeProps {
  category: string;
  className?: string;
}

const CategoryBadge: React.FC<CategoryBadgeProps> = ({ category, className = '' }) => {
  return (
    <Link 
      to={`/category/${category}`}
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-light-700 text-dark-700 hover:bg-light-600 dark:bg-dark-700 dark:text-light-700 dark:hover:bg-dark-600 transition-colors ${className}`}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </Link>
  );
};

export default CategoryBadge;
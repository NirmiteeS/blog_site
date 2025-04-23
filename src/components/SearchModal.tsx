import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { posts } from '../data/posts';
import { Post } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Post[]>([]);
  const navigate = useNavigate();

  const handleSearch = useCallback((term: string) => {
    const searchTermLower = term.toLowerCase();
    const filtered = posts.filter(post => 
      post.title.toLowerCase().includes(searchTermLower) ||
      post.excerpt.toLowerCase().includes(searchTermLower) ||
      post.categories.some(cat => cat.toLowerCase().includes(searchTermLower))
    ).slice(0, 5); // Limit to 5 results
    setResults(filtered);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      handleSearch(searchTerm);
    } else {
      setResults([]);
    }
  }, [searchTerm, handleSearch]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleResultClick = (slug: string) => {
    navigate(`/post/${slug}`);
    onClose();
    setSearchTerm('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div 
        className="bg-white dark:bg-dark-800 w-full max-w-2xl mx-4 rounded-lg shadow-xl"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
      >
        {/* Search Input */}
        <div className="p-4 border-b border-light-700 dark:border-dark-700 flex items-center gap-3">
          <Search size={20} className="text-dark-600 dark:text-light-600" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search articles..."
            className="flex-1 bg-transparent border-none outline-none text-lg"
            autoFocus
          />
          <button 
            onClick={onClose}
            className="p-2 hover:bg-light-700 dark:hover:bg-dark-700 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {results.length > 0 ? (
            <div className="py-2">
              {results.map((post) => (
                <button
                  key={post.id}
                  onClick={() => handleResultClick(post.slug)}
                  className="w-full px-4 py-3 hover:bg-light-700 dark:hover:bg-dark-700 text-left transition-colors flex items-start gap-4"
                >
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-medium mb-1">{post.title}</h3>
                    <p className="text-sm text-dark-600 dark:text-light-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          ) : searchTerm ? (
            <div className="p-4 text-center text-dark-600 dark:text-light-600">
              No results found for "{searchTerm}"
            </div>
          ) : (
            <div className="p-4 text-center text-dark-600 dark:text-light-600">
              Start typing to search...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
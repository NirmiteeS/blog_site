import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, we would send this to a backend
    console.log('Subscribed with:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-primary-50 dark:bg-dark-700 rounded-lg p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold mb-2 font-sans">
        Subscribe to our newsletter
      </h3>
      <p className="text-dark-600 dark:text-light-600 mb-4">
        Get our latest articles, travel guides, and photography tips delivered to your inbox.
      </p>
      
      {isSubmitted ? (
        <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 p-4 rounded-md">
          <p>Thank you for subscribing! We'll keep you updated with our latest content.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow px-4 py-2 rounded-md border border-light-600 dark:border-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-light-800"
          />
          <button 
            type="submit" 
            className="btn btn-primary whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
      )}
      
      <p className="text-xs text-dark-600 dark:text-light-600 mt-3">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterSignup;
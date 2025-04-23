import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-light-800 dark:bg-dark-800 py-12 mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
              Wanderlust
            </Link>
            <p className="mt-4 text-dark-600 dark:text-light-600">
              Exploring the world one adventure at a time. Join us as we share travel stories, photography tips, and hidden gems from around the globe.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-primary-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary-500 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary-500 transition-colors">Contact</Link></li>
              <li><Link to="/privacy" className="hover:text-primary-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary-500 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/travel" className="hover:text-primary-500 transition-colors">Travel</Link></li>
              <li><Link to="/category/photography" className="hover:text-primary-500 transition-colors">Photography</Link></li>
              <li><Link to="/category/adventure" className="hover:text-primary-500 transition-colors">Adventure</Link></li>
              <li><Link to="/category/culture" className="hover:text-primary-500 transition-colors">Culture</Link></li>
              <li><Link to="/category/food" className="hover:text-primary-500 transition-colors">Food</Link></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="mb-4 text-dark-600 dark:text-light-600">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md bg-white dark:bg-dark-700 border border-light-600 dark:border-dark-600 focus:outline-none focus:ring-1 focus:ring-primary-500 flex-grow"
                aria-label="Email address"
              />
              <button 
                type="submit" 
                className="btn btn-primary rounded-l-none"
                aria-label="Subscribe"
              >
                Subscribe
              </button>
            </form>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" aria-label="Twitter">
                  <Twitter size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" aria-label="YouTube">
                  <Youtube size={20} />
                </a>
                <a href="mailto:info@wanderlust.com" className="text-dark-600 dark:text-light-600 hover:text-primary-500 dark:hover:text-primary-400 transition-colors" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-light-700 dark:border-dark-700 mt-8 pt-8 text-sm text-center text-dark-600 dark:text-light-600">
          <p>&copy; {currentYear} Wanderlust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import SearchModal from './SearchModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-dark-800 shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            Wanderlust
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className={({ isActive }) => 
              `nav-link ${isActive ? 'active' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/category/travel" className="nav-link">
              Travel
            </NavLink>
            <NavLink to="/category/photography" className="nav-link">
              Photography
            </NavLink>
            <NavLink to="/category/adventure" className="nav-link">
              Adventure
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </nav>
          
          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              className="p-2 rounded-full hover:bg-light-700 dark:hover:bg-dark-700 transition-colors"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="p-2 rounded-full hover:bg-light-700 dark:hover:bg-dark-700 transition-colors"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
          <SearchModal 
            isOpen={isSearchOpen} 
            onClose={() => setIsSearchOpen(false)} 
          />
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button 
              className="p-2 rounded-full hover:bg-light-700 dark:hover:bg-dark-700 transition-colors"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button 
              className="p-2 rounded-full hover:bg-light-700 dark:hover:bg-dark-700 transition-colors"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white dark:bg-dark-800 shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container-custom">
          <nav className="flex flex-col space-y-4">
            <NavLink to="/" className={({ isActive }) => 
              `nav-link text-lg ${isActive ? 'active' : ''}`
            }>
              Home
            </NavLink>
            <NavLink to="/category/travel" className="nav-link text-lg">
              Travel
            </NavLink>
            <NavLink to="/category/photography" className="nav-link text-lg">
              Photography
            </NavLink>
            <NavLink to="/category/adventure" className="nav-link text-lg">
              Adventure
            </NavLink>
            <NavLink to="/about" className="nav-link text-lg">
              About
            </NavLink>
            <div className="flex pt-2">
              <button className="btn btn-outline w-full">
                <Search size={18} className="mr-2" />
                Search
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
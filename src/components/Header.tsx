import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Github, Linkedin, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ui/ThemeToggle';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/barunapasha', icon: Instagram },
    { name: 'GitHub', href: 'https://github.com/barunapasha', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/barunapasha/', icon: Linkedin },
    { name: 'WhatsApp', href: 'https://wa.me/6285717623720', icon: MessageCircle },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.header 
        className="container mx-auto px-8 py-6 flex justify-between items-center absolute w-full z-20 left-0 right-0"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link to="/" className="text-2xl font-bold tracking-wider dark:text-white hover-scale">
          Baruna.
        </Link>
        
        <nav className="hidden md:flex items-center space-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`nav-link ${
                location.pathname === item.href
                  ? 'text-gray-900 dark:text-white font-bold'
                  : 'text-gray-500 dark:text-gray-400'
              } hover:text-brand-purple dark:hover:text-brand-purple`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-btn md:hidden bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover-glow focus-ring transition-all"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleMobileMenu}
          >
            <motion.div
              className="absolute top-0 right-0 h-full w-full max-w-sm bg-white dark:bg-gray-900 shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Close Button */}
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-brand-purple"
                >
                  <X className="w-6 h-6" />
                </button>
                
                {/* Logo */}
                <div className="text-2xl font-bold tracking-wider dark:text-white mb-8">
                  Baruna.
                </div>
                
                {/* Navigation Links */}
                <nav className="space-y-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={toggleMobileMenu}
                      className="block text-xl font-semibold text-gray-900 dark:text-white hover:text-brand-purple transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                
                {/* Social Links */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Connect
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-500 dark:text-gray-400 hover:text-brand-purple transition-colors"
                        >
                          <Icon className="w-6 h-6" />
                        </a>
                      );
                    })}
                  </div>
                </div>
                
                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Contact
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Ready to work together?
                  </p>
                  <a
                    href="https://www.linkedin.com/in/barunapasha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-white font-bold py-3 px-6 rounded-lg inline-block"
                  >
                    Get In Touch
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
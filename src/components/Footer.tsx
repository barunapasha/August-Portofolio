import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Instagram, Github, Linkedin, MessageCircle, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com/barunapasha',
      color: 'hover:text-pink-500',
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/barunapasha',
      color: 'hover:text-gray-600 dark:hover:text-gray-300',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/barunapasha',
      color: 'hover:text-blue-600',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/6285717623720',
      color: 'hover:text-green-500',
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'baruna.pasha98@gmail.com',
      href: 'mailto:baruna.pasha98@gmail.com',
    },
    {
      icon: Phone,
      text: '+62 857-1762-3720',
      href: 'tel:+6285717623720',
    },
  ];

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 mt-32">
      <div className="container mx-auto px-8 py-16">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-2xl font-bold dark:text-white mb-4">
              Baruna Pasha
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
              A passionate developer creating amazing digital experiences with modern technologies.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-md transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold dark:text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-purple transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold dark:text-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const IconComponent = contact.icon;
                return (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="flex items-center text-gray-600 dark:text-gray-400 hover:text-brand-purple dark:hover:text-brand-purple transition-colors duration-300"
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Baruna Pasha. All rights reserved.
          </p>
          
          <motion.p 
            className="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0"
            whileHover={{ color: 'rgb(147 51 234)' }}
          >
            Made with 💜 using React & TailwindCSS
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
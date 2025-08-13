import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileImage from '../assets/images/foto-3.jpg';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <main className="container mx-auto px-8 flex flex-col-reverse md:flex-row items-center min-h-screen">
      <motion.div 
        className="md:w-1/2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="text-xl text-gray-600 dark:text-gray-400"
          variants={itemVariants}
        >
          Hey, I'm Baruna 👋
        </motion.p>
        
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mt-2 leading-none dark:text-white"
          variants={itemVariants}
        >
          <span className="gradient-text">Frontend</span>
          <br />
          Developer
        </motion.h1>
        
        <motion.p 
          className="mt-6 text-xl text-gray-500 dark:text-gray-300 max-w-md"
          variants={itemVariants}
        >
          I'm a frontend developer based in Jakarta, Indonesia, Passionate in Frontend Developer and Mobile developer.
        </motion.p>
        
        <motion.div 
          className="mt-8 flex items-center space-x-4"
          variants={itemVariants}
        >
          <a
            href="https://www.linkedin.com/in/barunapasha/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white font-bold py-3 px-8 rounded-lg"
          >
            Get In Touch
          </a>
          <Link
            to="/projects"
            className="bg-white border border-gray-300 text-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 font-bold py-3 px-8 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all hover-lift"
          >
            Browse Projects
          </Link>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="md:w-1/2 mb-12 md:mb-0 flex justify-center md:justify-end items-center"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="relative">
          <motion.div 
            className="absolute inset-0 bg-purple-200 dark:bg-purple-900 rounded-full transform -translate-x-4 -translate-y-4"
            style={{ filter: 'blur(80px)', zIndex: -1 }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.img
            src={profileImage}
            alt="Baruna"
            className="profile-image rounded-full w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[480px] object-cover border-4 border-white dark:border-gray-800 relative z-10"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.5)',
              borderWidth: '12px',
              boxShadow: '0 0 0 12px #9c66ff inset, 0 0 0 100vw #fff inset',
            }}
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </main>
  );
};

export default Hero;
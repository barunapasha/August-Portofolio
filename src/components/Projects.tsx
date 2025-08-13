import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import nongkiyukImage from '../assets/images/nongkiyuk.png';
import uperfoodImage from '../assets/images/uperfood.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
  technologies: string[];
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'NongkiYuk!',
      description: 'A semi-realtime using Flutter and combine with Firebase that helped people to search any cafe, restaurant, or coffee shop with their own needed based on Jakarta Selatan.',
      image: nongkiyukImage,
      technologies: ['Flutter', 'Firebase', 'Dart', 'Real-time Database'],
    },
    {
      id: 2,
      title: 'UperFood',
      description: 'E-commerce platform using PHP, HTML & TailwindCSS promoting canteen university products with third-party payment integration.',
      image: uperfoodImage,
      technologies: ['PHP', 'HTML', 'TailwindCSS', 'MySQL', 'Payment Gateway'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section className="container mx-auto px-8 mt-32">
      <motion.h2 
        className="text-6xl font-black dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Newest Projects.
      </motion.h2>

      <motion.div 
        className="grid md:grid-cols-2 gap-16 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-gray-100 dark:bg-[#1C1C1C] rounded-2xl p-8 card-hover group"
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden rounded-xl">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full shadow-md transition-transform duration-300 group-hover:scale-105"
                whileHover={{ scale: 1.05 }}
              />
            </div>
            
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-bold dark:text-white flex items-center">
                  {project.title}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-gray-400 dark:text-gray-500 hover:text-brand-purple transition-colors"
                    >
                      <ExternalLink className="h-6 w-6" />
                    </a>
                  )}
                </h3>
              </div>
              
              <p className="text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-sm rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <a
          href="https://github.com/barunapasha"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary text-white font-bold py-3 px-8 rounded-lg inline-flex items-center space-x-2 hover-lift"
        >
          <span>View All Projects</span>
          <ExternalLink className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;
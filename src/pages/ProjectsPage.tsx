import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import nongkiyukImage from '../assets/images/nongkiyuk.png';
import uperfoodImage from '../assets/images/uperfood.png';
import portfolioImage from '../assets/images/foto-3.jpg';
import quizWebImage from '../assets/images/quis-web.png';
import eventPlannerImage from '../assets/images/event-reactJS.png';
import calendarAppImage from '../assets/images/calendar-app.png';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  category: string;
}

const ProjectsPage: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'nongkiyuk',
      title: 'NongkiYuk!',
      description: 'A social platform for finding hangout spots and connecting with friends.',
      longDescription: 'NongkiYuk! is a comprehensive social platform designed to help people discover amazing hangout spots and connect with like-minded individuals. The platform features location-based recommendations, user reviews, and social networking capabilities.',
      image: nongkiyukImage,
      technologies: ['Flutter', 'Firebase', 'Google Maps API', 'Stripe'],
      githubUrl: 'https://github.com/Jihan97ux/nongki_yuk',
      date: '2025',
      category: 'Web Application',
    },
    {
      id: 'uperfood',
      title: 'UperFood',
      description: 'A modern food delivery application with real-time tracking.',
      longDescription: 'UperFood is a cutting-edge food delivery platform that connects customers with local restaurants. Features include real-time order tracking, secure payment processing, and an intuitive user interface for both customers and restaurant partners.',
      image: uperfoodImage,
      technologies: ['TailwindCSS', 'HTML', 'JavaScript', 'PHP', 'Laravel'],
      liveUrl: 'https://uperfood.app',
      githubUrl: 'https://github.com/barunapasha/Project-UperFood',
      date: '2024',
      category: 'Mobile Application',
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website built with React.',
      longDescription: 'This portfolio website showcases my projects, skills, and experience as a developer. Built with modern web technologies and featuring smooth animations, dark mode support, and responsive design.',
      image: portfolioImage,
      technologies: ['React', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      liveUrl: 'https://barunapasha.dev',
      githubUrl: 'https://github.com/barunapasha/portfolio',
      date: '2024',
      category: 'Portfolio',
    },
    {
      id: 'quiz-website',
      title: 'Simple Quiz Website',
      description: 'An interactive quiz application with multiple choice questions.',
      longDescription: 'A simple yet engaging quiz website built with vanilla JavaScript, HTML, and TailwindCSS. Features include multiple choice questions, score tracking, and responsive design for optimal user experience across all devices.',
      image: quizWebImage,
      technologies: ['JavaScript', 'HTML', 'TailwindCSS'],
      githubUrl: 'https://github.com/barunapasha/quiz-website',
      date: '2024',
      category: 'Web Application',
    },
    {
      id: 'event-planner',
      title: 'Event Planner',
      description: 'A modern event planning application built with ReactJS.',
      longDescription: 'A comprehensive event planning platform that helps users organize and manage events efficiently. Built with ReactJS and TailwindCSS, featuring event creation, guest management, and responsive design.',
      image: eventPlannerImage,
      technologies: ['ReactJS', 'TailwindCSS'],
      githubUrl: 'https://github.com/barunapasha/event-planner',
      date: '2025',
      category: 'Web Application',
    },
    {
      id: 'calendar-app',
      title: 'Calendar App',
      description: 'A mobile calendar application with event management features.',
      longDescription: 'A feature-rich calendar application built with Flutter and Firebase. Includes event scheduling, reminders, synchronization across devices, and a clean, intuitive user interface for managing daily activities.',
      image: calendarAppImage,
      technologies: ['Flutter', 'Firebase'],
      githubUrl: 'https://github.com/barunapasha/calendar-app',
      date: '2025',
      category: 'Mobile Application',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
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
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-black dark:text-white mb-4">
            My Projects.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and passion for creating amazing digital experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
            >
              {/* Project Image */}
              <motion.div 
                className="lg:w-1/2"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Project Details */}
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="h-4 w-4" />
                    <span>{project.category}</span>
                  </div>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold dark:text-white">
                  {project.title}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.longDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-brand-purple text-white rounded-lg hover:bg-brand-purple/90 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </motion.a>
                  )}
                  {project.githubUrl && (
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-brand-purple hover:text-brand-purple dark:hover:text-brand-purple transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-4 w-4" />
                      View Code
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Job {
  id: string;
  company: string;
  position: string;
  period: string;
  responsibilities: string[];
}

const Experience: React.FC = () => {
  const [activeJob, setActiveJob] = useState('network-assistant');

  const jobs: Job[] = [
    {
      id: 'network-assistant',
      company: 'Universitas Pertamina',
      position: 'Computer Network Lab Assistant',
      period: 'Feb 2025 - Present',
      responsibilities: [
        'Teach students about the basics of networking using cisco packet tracer',
        'Work with 2 other person and create a great team with just 3 people',
        'Contributed on making final task using cisco',
      ],
    },
    {
      id: 'system-assistant',
      company: 'Universitas Pertamina',
      position: 'System Operation Lab Assistant',
      period: 'Feb 2024 - Jul 2024',
      responsibilities: [
        'Teach students about the basics of System Operation using Linux',
        'Work with 2 other person and create a great team with just 3 people',
        'Work for approximately 5 months on-site',
      ],
    },
  ];

  const activeJobData = jobs.find(job => job.id === activeJob);

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="container mx-auto px-8 mt-32" id="experience">
      <motion.h2 
        className="text-6xl font-black dark:text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience.
      </motion.h2>
      
      <div className="mt-12 flex flex-col md:flex-row">
        {/* Company Buttons */}
        <motion.div 
          className="md:w-1/4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ul className="space-y-4">
            {jobs.map((job) => (
              <li key={job.id}>
                <button
                  onClick={() => setActiveJob(job.id)}
                  className={`text-2xl font-bold border-l-4 pl-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all rounded-r-lg w-full text-left py-2 ${
                    activeJob === job.id
                      ? 'text-brand-purple border-brand-purple'
                      : 'text-gray-400 dark:text-gray-500 border-gray-200 dark:border-gray-700'
                  }`}
                >
                  Lab Assistant
                </button>
              </li>
            ))}
          </ul>
        </motion.div>
        
        {/* Job Details */}
        <motion.div 
          className="md:w-3/4 mt-8 md:mt-0 md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {activeJobData && (
            <motion.div
              key={activeJobData.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold dark:text-white">
                {activeJobData.position}{' '}
                <span className="text-gray-500 dark:text-gray-400">
                  @ {activeJobData.company}
                </span>
              </h3>
              <p className="text-gray-500 dark:text-gray-400 mt-1">
                {activeJobData.period}
              </p>
              
              <motion.ul 
                className="mt-6 space-y-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {activeJobData.responsibilities.map((responsibility, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <Check className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {responsibility}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
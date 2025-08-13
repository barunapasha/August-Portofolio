import React from 'react';
import { motion } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Web Design',
      skills: ['UI/UX Design', 'Responsive Design', 'Wireframing', 'User Research'],
    },
    {
      title: 'Frontend',
      skills: ['Javascript', 'React.JS', 'Flutter', 'CSS3'],
    },
    {
      title: 'Backend',
      skills: ['NodeJs', 'php', 'Laravel', 'MySQL'],
    },
    {
      title: 'Soft Skills',
      skills: ['Effective communication', 'Collaboration', 'Commitment', 'Leadership'],
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

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
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
        Skills.
      </motion.h2>
      
      <motion.div 
        className="grid md:grid-cols-4 gap-12 mt-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            className="group"
          >
            <motion.h3 
              className="text-2xl font-bold border-b-4 border-brand-purple pb-2 inline-block dark:text-white group-hover:text-brand-purple transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {category.title}
            </motion.h3>
            
            <motion.ul 
              className="mt-6 space-y-3 text-lg text-gray-600 dark:text-gray-400"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
            >
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skillIndex}
                  variants={skillVariants}
                  className="hover:text-brand-purple transition-colors duration-300 cursor-default relative group/skill"
                  whileHover={{ x: 5 }}
                >
                  <span className="relative z-10">{skill}</span>
                  <motion.div
                    className="absolute inset-0 bg-brand-purple/5 rounded-md -z-10 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
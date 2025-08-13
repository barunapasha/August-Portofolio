import React from 'react';
import { motion } from 'framer-motion';

const MyStory: React.FC = () => {
  const paragraphs = [
    "My journey into the world of technology is a bit unconventional. For years, my life revolved around the discipline and rigor of competitive swimming, which taught me about dedication, perseverance, and the pursuit of excellence.",
    "Now, as a 6th-semester computer science student, I've found that the thrill of building an application from scratch rivals the excitement of a race. I was captivated by the process of turning an idea into a functional and beautiful piece of software, and I knew I had found my new passion.",
    "While I may have swapped my swim cap for a keyboard, I carry the same focus and determination from my athletic career into every project I undertake. I'm excited to build amazing digital experiences, and I truly love what I do! 💜"
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

  const paragraphVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
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
        My Story.
      </motion.h2>
      
      <motion.div 
        className="mt-8 text-lg text-gray-600 dark:text-gray-400 max-w-4xl space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {paragraphs.map((paragraph, index) => (
          <motion.p
            key={index}
            variants={paragraphVariants}
            className="leading-relaxed"
            whileHover={{ 
              color: 'rgb(107 114 128)',
              transition: { duration: 0.3 }
            }}
          >
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
      
      {/* Decorative element */}
      <motion.div
        className="mt-12 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-brand-purple to-purple-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: '6rem' }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        />
      </motion.div>
    </section>
  );
};

export default MyStory;
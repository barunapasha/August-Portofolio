import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, GraduationCap, Award } from 'lucide-react';
import profileImage from '../assets/images/foto-3.jpg';
import AnimatedContent from '../blocks/Animations/AnimatedContent/AnimatedContent';
import Magnet from '../blocks/Animations/Magnet/Magnet';
import FadeIn from '../blocks/Animations/FadeIn/FadeIn';
import CountUp from '../blocks/Animations/CountUp/CountUp';

const About: React.FC = () => {
  const skills = useMemo(() => [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Flutter',
    'Laravel', 'MySQL', 'MongoDB', 'Git', 'Docker', 'AWS'
  ], []);

  const achievements = useMemo(() => [
    {
      title: 'Computer Network Lab Assistant',
      organization: 'Universitas Pertamina',
      period: 'Feb 2025 - Present',
      description: 'Teaching students networking fundamentals using Cisco Packet Tracer'
    },
    {
      title: 'System Operation Lab Assistant',
      organization: 'Universitas Pertamina',
      period: 'Feb 2024 - Jul 2024',
      description: 'Instructed students in Linux system operations and administration'
    },
    {
      title: 'Competitive Swimming',
      organization: 'Various Competitions',
      period: '2015 - 2020',
      description: 'Competed at regional and national level swimming competitions'
    }
  ], []);

  const containerVariants = useMemo(() => ({
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }), []);

  const itemVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }), []);

  const handleDownloadCV = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/CV-Baruna-Pasha.pdf';
    link.download = 'CV-Baruna-Pasha.pdf';
    link.setAttribute('aria-label', 'Download CV PDF file');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

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
            About Me.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives my passion for technology.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Personal Info */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold dark:text-white mb-6">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-purple/10 rounded-lg">
                    <MapPin className="h-5 w-5 text-brand-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium dark:text-white">Jakarta, Indonesia</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-purple/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-brand-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Age</p>
                    <p className="font-medium dark:text-white">21 years old</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-purple/10 rounded-lg">
                    <GraduationCap className="h-5 w-5 text-brand-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Education</p>
                    <p className="font-medium dark:text-white">Computer Science Student</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-purple/10 rounded-lg">
                    <Award className="h-5 w-5 text-brand-purple" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="font-medium dark:text-white">2+ Years</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* My Story */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold dark:text-white mb-6">My Journey</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  My journey into technology began with an unconventional background in competitive swimming. 
                  For years, I dedicated myself to the discipline and rigor of the sport, which taught me 
                  invaluable lessons about perseverance, dedication, and the pursuit of excellence.
                </p>
                <p>
                  As a 6th-semester Computer Science student at Universitas Pertamina, I discovered that 
                  the thrill of building applications from scratch rivals the excitement of competitive racing. 
                  The process of transforming ideas into functional, beautiful software captivated me completely.
                </p>
                <p>
                  While I may have traded my swim cap for a keyboard, I carry the same focus and determination 
                  from my athletic career into every project I undertake. I'm passionate about creating amazing 
                  digital experiences and truly love what I do! 💜
                </p>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold dark:text-white mb-6">Experience & Achievements</h2>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={`${achievement.title}-${index}`}
                    className="border-l-4 border-brand-purple pl-6 relative"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-brand-purple rounded-full" aria-hidden="true" />
                    <h3 className="font-bold dark:text-white">{achievement.title}</h3>
                    <p className="text-brand-purple font-medium">{achievement.organization}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{achievement.period}</p>
                    <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
              <motion.div
                className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Baruna Pasha - Frontend Developer"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <h3 className="text-xl font-bold dark:text-white mb-2">Baruna Pasha</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">Front-End Developer</p>
              
              <Magnet magnetStrength={0.4} padding={30}>
                <motion.button
                  className="flex items-center gap-2 mx-auto px-6 py-3 bg-brand-purple text-white rounded-lg hover:bg-brand-purple/90 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-brand-purple focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleDownloadCV}
                  aria-label="Download CV PDF file"
                  type="button"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </motion.button>
              </Magnet>
            </motion.div>

            {/* Skills */}
            <AnimatedContent distance={60} direction="vertical" duration={0.8}>
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold dark:text-white mb-6">Technical Skills</h3>
                <div className="flex flex-wrap gap-2" role="list" aria-label="Technical skills">
                  {skills.map((skill, index) => (
                    <FadeIn key={skill} direction="scale" delay={index * 0.05} duration={0.4}>
                      <motion.span
                        className="px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium"
                        whileHover={{ scale: 1.1 }}
                        role="listitem"
                      >
                        {skill}
                      </motion.span>
                    </FadeIn>
                  ))}
                </div>
              </motion.div>
            </AnimatedContent>

            {/* Fun Facts */}
            <AnimatedContent distance={60} direction="vertical" duration={0.8} delay={0.2}>
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold dark:text-white mb-6">Fun Facts</h3>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple" role="img" aria-label="Swimming">🏊‍♂️</span>
                    Former competitive swimmer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple" role="img" aria-label="Coffee">☕</span>
                    Coffee enthusiast
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple" role="img" aria-label="Gaming">🎮</span>
                    Gaming in free time
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-brand-purple" role="img" aria-label="Learning">📚</span>
                    Always learning new technologies
                  </li>
                </ul>
              </motion.div>
            </AnimatedContent>

            {/* Statistics */}
            <AnimatedContent distance={60} direction="vertical" duration={0.8} delay={0.4}>
              <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold dark:text-white mb-6">By the Numbers</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-purple mb-2">
                      <CountUp end={15} suffix="+" duration={2.5} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-purple mb-2">
                      <CountUp end={3} suffix="+" duration={2.5} delay={0.2} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-purple mb-2">
                      <CountUp end={12} suffix="+" duration={2.5} delay={0.4} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Technologies</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-brand-purple mb-2">
                      <CountUp end={100} suffix="%" duration={2.5} delay={0.6} />
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Dedication</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedContent>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
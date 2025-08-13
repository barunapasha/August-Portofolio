import React from 'react';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import MyStory from '../components/MyStory';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <MyStory />
    </div>
  );
};

export default Home;
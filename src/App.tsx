import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import About from './pages/About';
import SplashCursor from './blocks/Animations/SplashCursor/SplashCursor';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-brand-dark transition-colors duration-300">
          <SplashCursor 
            color="#6E00FF"        // Warna cursor
            size={8}              // Ukuran dot (default: 8)
            trailLength={20}      // Panjang trail (default: 20)
            fadeSpeed={0.95}      // Kecepatan fade (default: 0.95)
            disabled={false}      // Nonaktifkan jika perlu
          />
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
<SplashCursor color="#9c66ff" size={10} trailLength={30} />

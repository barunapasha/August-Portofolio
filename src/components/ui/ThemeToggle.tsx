import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 hover-glow focus-ring transition-all"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5 text-gray-900 dark:text-white" />
      ) : (
        <Moon className="w-5 h-5 text-gray-900 dark:text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
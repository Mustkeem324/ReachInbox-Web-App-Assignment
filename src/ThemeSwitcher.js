// src/ThemeSwitcher.js
import React, { useState } from 'react';
import './index.css'; // Import any additional styles specific to ThemeSwitcher

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <div className="theme-switcher">
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;

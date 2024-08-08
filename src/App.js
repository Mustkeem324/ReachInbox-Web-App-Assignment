// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import OneboxPage from './pages/OneboxPage';
import ThemeSwitcher from './ThemeSwitcher';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  return (
    <Router>
      <ThemeSwitcher />
      <Routes>
        <Route path="/google-login" element={<OneboxPage />} />
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;

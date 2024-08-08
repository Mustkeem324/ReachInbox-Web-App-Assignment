// src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Import any additional styles specific to LoginPage

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post('YOUR_API_ENDPOINT_FOR_LOGIN', { email, password });
      navigate('/google-login');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="container">
      <h1>ReachInBox-Assignment</h1>  
      <div className="form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <div className="social-login">
          <a href="https://reachinbox-assignment-4rf9.onrender.com/auth/google">
            <i className="fab fa-google"></i> Sign in With Google
          </a>
          <a href="https://reachinbox-assignment-4rf9.onrender.com/outlook/signin">
            <i className="fab fa-microsoft"></i> Sign in With Microsoft
          </a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Login.scss';
import loginImage from '../assets/login.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setIsLoggedIn(true);
      const userData = JSON.parse(loggedInUser);
      setLoginStatus(`You are already logged in as ${userData.email}`);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLoggedIn) {
      setLoginStatus('You are already logged in!');
      return;
    }

    // Simple validation - just check if fields are filled
    if (!email || !password) {
      setLoginStatus('Please fill in all fields');
      return;
    }

    // Check if user exists in localStorage (from signup)
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find(user => user.email === email);
    
    if (existingUser && existingUser.password === password) {
      // Successful login
      localStorage.setItem('loggedInUser', JSON.stringify(existingUser));
      setIsLoggedIn(true);
      setLoginStatus(`✅ Successfully logged in! Welcome back, ${existingUser.firstName}!`);
    } else if (existingUser) {
      setLoginStatus('❌ Incorrect password. Please try again.');
    } else {
      setLoginStatus('❌ No account found with this email. Please sign up first.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setLoginStatus('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-page">
      <motion.div 
        className="login-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="login-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Find Your Dream Space with S2 Realty
          </motion.h2>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Create an account to receive early access to upcoming properties.
          </motion.p>
          
          {/* Status Message */}
          {loginStatus && (
            <motion.p 
              className={`status-message ${isLoggedIn ? 'success' : 'error'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ 
                color: isLoggedIn ? '#4CAF50' : '#f44336', 
                fontWeight: 'bold', 
                marginBottom: '20px',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: isLoggedIn ? '#e8f5e8' : '#ffeaea'
              }}
            >
              {loginStatus}
            </motion.p>
          )}

          {isLoggedIn ? (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <button onClick={handleLogout} className="login-btn" style={{ backgroundColor: '#f44336' }}>
                Logout
              </button>
            </motion.div>
          ) : (
            <motion.form 
              className="login-form" 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <button type="submit" className="login-btn">
                Log In
              </button>
            </motion.form>
          )}
          
          <motion.p 
            className="signup-link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </motion.p>
          
          <motion.p 
            className="forgot-password"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <a href="/forgot-password">Forgot your password?</a>
          </motion.p>
        </div>
      </motion.div>
      
      <motion.div 
        className="login-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img src={loginImage} alt="Real Estate" className="login-image" />
      </motion.div>
    </div>
  );
};

export default Login;

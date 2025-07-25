import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SignUp.scss';
import loginImage from '../assets/signup.jpg';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [signupStatus, setSignupStatus] = useState('');
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Reset status
    setSignupStatus('');
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password || !formData.confirmPassword) {
      setSignupStatus('❌ Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setSignupStatus('❌ Passwords do not match');
      return;
    }
    
    if (formData.password.length < 6) {
      setSignupStatus('❌ Password must be at least 6 characters long');
      return;
    }
    
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.find(user => user.email === formData.email);
    
    if (userExists) {
      setSignupStatus('❌ An account with this email already exists. Please login instead.');
      return;
    }
    
    // Create new user
    const newUser = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      createdAt: new Date().toISOString()
    };
    
    // Save to localStorage
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    
    // Success!
    setIsSignupSuccess(true);
    setSignupStatus(`✅ Account created successfully! Welcome, ${formData.firstName}! You can now login with your credentials.`);
    
    // Clear form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  };

  return (
    <div className="signup-page">
      <motion.div 
        className="signup-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <img src={loginImage} alt="Real Estate" className="signup-image" />
      </motion.div>
      
      <motion.div 
        className="signup-right"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="signup-content">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Join S2 Realty Today
          </motion.h2>
          <motion.p 
            className="subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Create your account to discover exclusive properties and investment opportunities.
          </motion.p>
          
          {/* Status Message */}
          {signupStatus && (
            <motion.p 
              className={`status-message ${isSignupSuccess ? 'success' : 'error'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ 
                color: isSignupSuccess ? '#4CAF50' : '#f44336', 
                fontWeight: 'bold', 
                marginBottom: '20px',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: isSignupSuccess ? '#e8f5e8' : '#ffeaea'
              }}
            >
              {signupStatus}
            </motion.p>
          )}

          <motion.form 
            className="signup-form" 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="signup-btn">
              Create Account
            </button>
          </motion.form>
          
          <motion.p 
            className="login-link"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Already have an account? <Link to="/login">Sign in here</Link>
          </motion.p>
          
          <motion.p 
            className="terms"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            By creating an account, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;

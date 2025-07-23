import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('SignUp attempt:', formData);
  };

  return (
    <div className="signup-page">
      <div className="signup-left">
        <img src={loginImage} alt="Real Estate" className="signup-image" />
      </div>
      
      <div className="signup-right">
        <div className="signup-content">
          <h2>Join S2 Realty Today</h2>
          <p className="subtitle">Create your account to discover exclusive properties and investment opportunities.</p>
          
          <form className="signup-form" onSubmit={handleSubmit}>
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
          </form>
          
          <p className="login-link">
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>
          
          <p className="terms">
            By creating an account, you agree to our <a href="/terms">Terms of Service</a> and <a href="/privacy">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

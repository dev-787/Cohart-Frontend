import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import loginImage from '../assets/login.jpg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-content">
          <h2>Find Your Dream Space with S2 Realty</h2>
          <p className="subtitle">Create an account to receive early access to upcoming properties.</p>
          
          <form className="login-form" onSubmit={handleSubmit}>
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
          </form>
          
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
          
          <p className="forgot-password">
            <a href="/forgot-password">Forgot your password?</a>
          </p>
        </div>
      </div>
      
      <div className="login-right">
        <img src={loginImage} alt="Real Estate" className="login-image" />
      </div>
    </div>
  );
};

export default Login;

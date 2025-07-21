import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@/assets/one8.png';
import './Navbar.scss';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show navbar when at top of page
      if (currentScrollY === 0) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          <img src={logo} alt="One8 Logo" className="logo" />
        </div>
        <div className="navbar-buttons">
          <button className="navbar-btn" onClick={() => navigate('/projects')}>
            <div className="btn-text">
              <span>Projects</span>
              <span>Projects</span>
            </div>
          </button>
          <button className="navbar-btn" onClick={() => navigate('/services')}>
            <div className="btn-text">
              <span>Services</span>
              <span>Services</span>
            </div>
          </button>
          <button className="navbar-btn" onClick={() => navigate('/contact')}>
            <div className="btn-text">
              <span>Contact</span>
              <span>Contact</span>
            </div>
          </button>
          <button className="navbar-btn" onClick={() => navigate('/login')}>
            <div className="btn-text">
              <span>Login</span>
              <span>Login</span>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import logo from '@/assets/one8.png';
import './Navbar.scss';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      <div className="navbar-logo">
        <img src={logo} alt="One8 Logo" className="logo" />
      </div>
      <div className="navbar-buttons">
        <button className="navbar-btn">
          <div className="btn-text">
            <span>Menu</span>
            <span>Menu</span>
          </div>
        </button>
        <button className="navbar-btn">
          <div className="btn-text">
            <span>Login</span>
            <span>Login</span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '@/assets/one8.png';
import './Navbar.scss';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const handleMobileNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Cleanup body scroll on component unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <img src={logo} alt="One8 Logo" className="logo" />
          </div>
          
          {/* Desktop Navigation */}
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
        
        {/* Mobile Hamburger Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <div className={`hamburger ${isMobileMenuOpen ? 'hamburger-open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>
    </nav>
    
    {/* Mobile Menu Overlay */}
    <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
      <div className="mobile-menu-content">
        <div className="mobile-menu-header">
          <div className="mobile-menu-logo" onClick={() => handleMobileNavigation('/')}>
            <img src={logo} alt="One8 Logo" className="mobile-logo" />
          </div>
          <button 
            className="mobile-menu-close"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            <span>×</span>
          </button>
        </div>
        
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <button 
                className="mobile-nav-link" 
                onClick={() => handleMobileNavigation('/projects')}
              >
                Projects
              </button>
            </li>
            <li className="mobile-nav-item">
              <button 
                className="mobile-nav-link" 
                onClick={() => handleMobileNavigation('/services')}
              >
                Services
              </button>
            </li>
            <li className="mobile-nav-item">
              <button 
                className="mobile-nav-link" 
                onClick={() => handleMobileNavigation('/contact')}
              >
                Contact
              </button>
            </li>
            <li className="mobile-nav-item">
              <button 
                className="mobile-nav-link" 
                onClick={() => handleMobileNavigation('/login')}
              >
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  );
};

export default Navbar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="footer-title">
              Making Luxury<br />
              Living Effortless
            </h2>
            <button className="book-visit-btn" onClick={() => navigate('/contact')}>
              <span className="btn-text">Book Visit</span>
              <span className="btn-arrow">↑</span>
            </button>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Pages</h3>
              <ul>
                <li onClick={() => navigate('/')}><span>Home</span> <span className="link-arrow">↗</span></li>
                <li onClick={() => navigate('/projects')}><span>Projects</span> <span className="link-arrow">↗</span></li>
                <li onClick={() => navigate('/services')}><span>Services</span> <span className="link-arrow">↗</span></li>
                <li onClick={() => navigate('/contact')}><span>Contact</span> <span className="link-arrow">↗</span></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Social</h3>
              <ul>
                <li><span>Instagram</span> <span className="link-arrow">↗</span></li>
                <li><span>Mail</span> <span className="link-arrow">↗</span></li>
                <li><span>Twitter</span> <span className="link-arrow">↗</span></li>
                <li><span>LinkedIn</span> <span className="link-arrow">↗</span></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span className="copyright">All copyrights are under S2 Realty & Developers Pvt. Ltd.</span>
          <div className="footer-credits">
            <span>Design and developed by remixframer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

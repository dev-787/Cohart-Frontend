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
              Book Visit →
            </button>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Pages</h3>
              <ul>
                <li onClick={() => navigate('/')}>Home ↗</li>
                <li onClick={() => navigate('/projects')}>Projects ↗</li>
                <li onClick={() => navigate('/services')}>Services ↗</li>
                <li onClick={() => navigate('/contact')}>Contact ↗</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Social</h3>
              <ul>
                <li>Instagram ↗</li>
                <li>Mail ↗</li>
                <li>Twitter ↗</li>
                <li>LinkedIn ↗</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <span className="copyright">All copyrights are server@Swaarg</span>
          <div className="footer-credits">
            <span>Design and developed by remixframer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

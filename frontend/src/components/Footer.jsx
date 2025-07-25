import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-left">
            <motion.h2 
              className="footer-title"
              initial={{ 
                opacity: 0, 
                x: -30
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0
              }}
              transition={{ 
                duration: 1.2, 
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              Making Luxury<br />
              Living Effortless
            </motion.h2>
            <motion.button 
              className="book-visit-btn" 
              onClick={() => navigate('/contact')}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <span className="btn-text">Book Visit</span>
              <span className="btn-arrow">↑</span>
            </motion.button>
          </div>
          
          <motion.div 
            className="footer-links"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div 
              className="footer-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3>Pages</h3>
              <ul>
                <li onClick={() => navigate('/')}><span>Home</span> <span className="link-arrow">↗</span></li>
                <li onClick={() => navigate('/projects')}><span>Projects</span> <span className="link-arrow">↗</span></li>
                <li onClick={() => navigate('/services')}><span>Services</span> <span className="link-arrow">↗</span></li>
                <li onClick={() => navigate('/contact')}><span>Contact</span> <span className="link-arrow">↗</span></li>
              </ul>
            </motion.div>
            
            <motion.div 
              className="footer-column"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3>Social</h3>
              <ul>
                <li onClick={() => window.open('https://www.instagram.com/s2realty', '_blank')}><span>Instagram</span> <span className="link-arrow">↗</span></li>
                <li onClick={() => window.open('mailto:info@s2realty.com', '_blank')}><span>Mail</span> <span className="link-arrow">↗</span></li>
                <li onClick={() => window.open('https://www.twitter.com/s2realty', '_blank')}><span>Twitter</span> <span className="link-arrow">↗</span></li>
                <li onClick={() => window.open('https://www.linkedin.com/company/s2realty', '_blank')}><span>LinkedIn</span> <span className="link-arrow">↗</span></li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
        
        <div className="footer-bottom">
          <motion.span 
            className="copyright"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            All copyrights are under S2 Realty & Developers Pvt. Ltd.
          </motion.span>
          <motion.div 
            className="footer-credits"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <span>Design and developed by remixframer</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

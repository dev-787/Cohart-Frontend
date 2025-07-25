import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Transform scroll progress to card position
  // Start at 70vh (10% up from 80vh) and move down as you scroll
  const cardY = useTransform(scrollYProgress, [0, 1], ['70vh', '50vh']);
  const cardX = useTransform(() => '-50%');
  
  // Debug: Log scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (value) => {
      console.log('Scroll Progress:', value, 'Card Y:', value === 0 ? '70vh' : `${70 - (value * 20)}vh`);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  return (
    <div className="contact-page" ref={containerRef}>
      <div className="contact-hero-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Let's make your dream home a reality.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Reach out to explore our luxury homes or start designing a space tailored to your vision.
        </motion.p>
      </div>
      <motion.div 
        className="contact-card"
        style={{ 
          top: cardY,
          left: 0,
          right: 0,
          margin: '0 auto'
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="card-content">
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Will Barrow" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="will@barrow.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Tell us about your inquiry or vision" rows="4"></textarea>
            </div>
            
            <div className="form-group">
              <label htmlFor="source">How did you hear about us?</label>
              <select id="source" name="source">
                <option value="">Let us know how you found us</option>
                <option value="google">Google Search</option>
                <option value="social">Social Media</option>
                <option value="referral">Referral</option>
                <option value="advertisement">Advertisement</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </motion.div>
      <div className="contact-white-container">
        <div className="contact-benefits">
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="/src/assets/contact1.svg" alt="Personalized Guidance" />
            </div>
            <h3>Personalized Guidance</h3>
            <p>Get expert advice tailored to your personal needs.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="/src/assets/contact2.svg" alt="Quick Response Time" />
            </div>
            <h3>Quick Response Time</h3>
            <p>We'll respond promptly to your inquiry within 24 hours.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon">
              <img src="/src/assets/contact3.svg" alt="Explore Custom Options" />
            </div>
            <h3>Explore Custom Options</h3>
            <p>Learn how we can create your bespoke home.</p>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Contact;

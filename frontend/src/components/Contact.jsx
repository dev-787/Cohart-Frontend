import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Contact.scss';
import handsVideo from '../assets/hands.webm';

const Contact = () => {
  const navigate = useNavigate();

  const handleGetInTouchClick = () => {
    navigate('/contact');
  };
  return (
    <section className="contact">
      <div className="contact-content">
        <motion.h2
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
          Contact Us
        </motion.h2>
        <motion.p
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
            delay: 0.2,
            ease: [0.25, 0.1, 0.25, 1]
          }}
          viewport={{ once: true, amount: 0.1 }}
        >
          Luxury isn't a price—it's a feeling we build.
        </motion.p>
        
        <div className="video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hands-video"
          >
            <source src={handsVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <motion.button 
          className="get-in-touch-btn" 
          onClick={handleGetInTouchClick}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <span className="btn-text">Get In Touch</span>
          <span className="btn-arrow">↑</span>
        </motion.button>

      </div>
    </section>
  );
};

export default Contact;

import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './Contact.scss';

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    source: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    return newErrors;
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Simulate form submission
    console.log('Form submitted:', formData);
    
    // Set success state
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        message: '',
        source: ''
      });
    }, 3000);
  };
  
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
          {isSubmitted ? (
            <div className="success-message">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="success-content"
              >
                <div className="success-icon">✓</div>
                <h3>Thank you for your message!</h3>
                <p>We'll get back to you within 24 hours.</p>
              </motion.div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  placeholder="Will Barrow" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  placeholder="will@barrow.com" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about your inquiry or vision" 
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="source">How did you hear about us?</label>
                <select 
                  id="source" 
                  name="source"
                  value={formData.source}
                  onChange={handleInputChange}
                >
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
          )}
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

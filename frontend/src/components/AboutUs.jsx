import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './AboutUs.scss';
import suniel from '@/assets/suniel.jpg';

const CounterAnimation = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const currentCount = Math.floor(progress * end);
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
};

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-main">
        <div className="about-us-container">
          <div className="about-us-content">
            <motion.h2 
              className="about-us-title"
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
              The Story Behind the Craft
            </motion.h2>
            <motion.p
              className="about-us-description"
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
              <span className="company-name">S2 Realty & Developers Pvt. Ltd.</span> is a boutique real estate development company founded by renowned actor and entrepreneur <span className="founder-name">Suniel V. Shetty</span>. Built on a foundation of integrity, sustainability, and timeless design, <span className="company-name-short">S2 Realty</span> specializes in crafting premium second homes that blend luxury living with natural serenity.
            </motion.p>
            <motion.p
              className="about-us-description"
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
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              viewport={{ once: true, amount: 0.1 }}
            >
              At <span className="company-name-short">S2 Realty</span>, we believe in building more than just homes — we create sanctuaries where architecture, nature, and functionality come together seamlessly. Every project is thoughtfully planned, debt-free, and executed with meticulous attention to detail, ensuring long-term value for both homeowners and investors.
            </motion.p>
          </div>
          
          <motion.div 
            className="about-us-image"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="image-container">
              <img 
                src={suniel} 
                alt="Suniel - The Story Behind the Craft" 
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="about-us-stats"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="stat-item">
          <div className="stat-number">
            <CounterAnimation end={200} suffix="+" />
          </div>
          <div className="stat-label">Home Projects</div>
          <div className="stat-description">Crafted with precision and ultimate elegance.</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-number">
            <CounterAnimation end={50} suffix="+" />
          </div>
          <div className="stat-label">Years of Works</div>
          <div className="stat-description">Decades of expertise and leading innovation.</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-number">
            <CounterAnimation end={5} suffix="K" />
          </div>
          <div className="stat-label">Satisfied Clients</div>
          <div className="stat-description">Trust, excellence, and lasting relationships.</div>
        </div>
        
        <div className="stat-item">
          <div className="stat-number">
            <CounterAnimation end={97} suffix="%" />
          </div>
          <div className="stat-label">Happy Rate</div>
          <div className="stat-description">Delivering joy through exceptional living.</div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;

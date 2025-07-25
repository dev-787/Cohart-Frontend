import React from 'react';
import { motion } from 'framer-motion';
import './Services.scss';
import ServicesComponent from '../components/Services';

const Services = () => {
  return (
    <div className="services-page">
      {/* Hero content area - same gradient background as contact */}
      <div className="services-hero-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Find out what makes us so special.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          From kitchens to gardens, we bring elegance to every inch of your&nbsp;home.
        </motion.p>
      </div>
      
      {/* White container starting at 80vh with 100vh height */}
      <div className="services-white-container">
        <ServicesComponent />
      </div>
    </div>
  );
};

export default Services;

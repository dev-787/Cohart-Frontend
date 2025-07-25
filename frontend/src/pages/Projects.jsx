import React from 'react';
import { motion } from 'framer-motion';
import './Projects.scss';

const Projects = () => {
  return (
    <div className="projects-page">
      {/* Hero content area - same gradient background as contact */}
      <div className="projects-hero-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Discover your dream&nbsp;Home
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Explore our collection of luxury residences, each crafted with timeless design, and exceptional craftsmanship.
        </motion.p>
      </div>
      
      {/* White container starting at 80vh with 100vh height */}
      <div className="projects-white-container">
        {/* Content can be added here */}
      </div>
    </div>
  );
};

export default Projects;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.scss';

const Preloader = ({ onComplete }) => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimatingUp, setIsAnimatingUp] = useState(false);

  useEffect(() => {
    // Start preloading images in background
    preloadImages();

    // Animate percentage from 0 to 100% over 9 seconds
    let startTime = Date.now();
    const duration = 9000; // 9 seconds

    const updatePercentage = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Use easing for smooth animation (ease-out)
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentPercentage = Math.floor(easedProgress * 100);
      
      setPercentage(currentPercentage);

      if (progress < 1) {
        requestAnimationFrame(updatePercentage);
      } else {
        // At 9 seconds, ensure we're at 100%
        setPercentage(100);
        
        // After 1 more second (at 10 seconds total), start upward animation
        setTimeout(() => {
          setIsAnimatingUp(true);
          
          // After upward animation completes, hide preloader and start main site
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 1000); // 1 second for upward animation
        }, 1000);
      }
    };

    updatePercentage();
  }, [onComplete]);

  const preloadImages = () => {
    // Add your key images here to preload in background
    const imageUrls = [
      '/src/assets/hero-bg.jpg',
      '/src/assets/project1.jpg',
      '/src/assets/project2.jpg',
      '/src/assets/services-bg.jpg',
      // Add more critical images
    ];

    imageUrls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="preloader"
        initial={{ y: 0 }}
        animate={{ 
          y: isAnimatingUp ? '-100vh' : 0 
        }}
        transition={{ 
          duration: isAnimatingUp ? 1 : 0,
          ease: [0.76, 0, 0.24, 1] // Custom cubic-bezier for smooth upward motion
        }}
      >
        <div className="preloader-content">
          <motion.div 
            className="percentage"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {percentage}%
          </motion.div>
          
          <motion.div 
            className="progress-line"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: percentage / 100 }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Preloader;

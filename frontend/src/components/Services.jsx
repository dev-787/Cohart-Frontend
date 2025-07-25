import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Services.scss';
import s1 from '@/assets/s1.png';
import s2 from '@/assets/s2.png';
import s3 from '@/assets/s3.png';
import s4 from '@/assets/s4.png';
import s5 from '@/assets/s5.png';
import s6 from '@/assets/s6.png';
import ser1 from '@/assets/ser1.svg';
import ser2 from '@/assets/ser2.svg';
import ser3 from '@/assets/ser3.svg';
import ser4 from '@/assets/ser4.svg';
import ser5 from '@/assets/ser5.svg';
import ser6 from '@/assets/ser6.svg';

const Services = () => {
  const [expandedService, setExpandedService] = useState('kitchens');
  const [currentImage, setCurrentImage] = useState('kitchens');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const services = [
    {
      id: 'kitchens',
      title: 'Kitchens',
      icon: ser1,
      description: 'We design and build stunning kitchens tailored to your style and needs. Whether you\'re after a sleek modern space or a classic, timeless look, our expert team delivers high-quality craftsmanship, functionality, and attention to detail to create the heart of your home.'
    },
    {
      id: 'loft-conversions',
      title: 'Loft Conversions',
      icon: ser2,
      description: 'Maximise your home\'s potential with a bespoke loft conversion — perfect for an extra bedroom, office, or living space. Designed for style, comfort, and added value.'
    },
    {
      id: 'bathrooms',
      title: 'Bathrooms',
      icon: ser3,
      description: 'From luxurious en-suites to practical family bathrooms — beautifully designed spaces that balance style and function. Complete solutions including tiling, plumbing, and lighting for a flawless finish.'
    },
    {
      id: 'extensions',
      title: 'Extensions',
      icon: ser4,
      description: 'Expand your living space with a seamless home extension — from larger kitchens to versatile living areas, expertly crafted to enhance flow, value, and character.'
    },
    {
      id: 'restorations',
      title: 'Restorations',
      icon: ser5,
      description: 'Restore your home\'s character with expert care — from period features to full renovations, blending heritage charm with modern durability.'
    },
    {
      id: 'external-works',
      title: 'External Works',
      icon: ser6,
      description: 'From driveways to patios, fencing to brickwork — enhance your home\'s exterior with lasting quality and standout design.'
    }
  ];

  // Handle image changes when service changes with transition
  useEffect(() => {
    if (expandedService && expandedService !== currentImage) {
      setIsTransitioning(true);
      
      // Start fade out
      setTimeout(() => {
        setCurrentImage(expandedService);
        // Complete fade in after image change
        setTimeout(() => {
          setIsTransitioning(false);
        }, 50); // Short delay to ensure image has loaded
      }, 200); // Duration of fade out
    }
  }, [expandedService, currentImage]);

  const toggleService = (serviceId) => {
    if (expandedService !== serviceId) {
      setExpandedService(serviceId);
    } else {
      setExpandedService(null);
    }
  };

  // Function to get the service image
  const getServiceImage = (serviceId) => {
    const imageMap = {
      'kitchens': s1,
      'loft-conversions': s2,
      'bathrooms': s3,
      'extensions': s4,
      'restorations': s5,
      'external-works': s6
    };
    return imageMap[serviceId] || s1;
  };

  // Function to get the service alt text
  const getServiceAlt = (serviceId) => {
    const altMap = {
      'kitchens': 'Modern kitchen interior',
      'loft-conversions': 'Loft conversion space',
      'bathrooms': 'Luxury bathroom design',
      'extensions': 'Home extension project',
      'restorations': 'Property restoration work',
      'external-works': 'Exterior home improvements'
    };
    return altMap[serviceId] || 'Service interior space';
  };
  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-header">
          <div className="services-title-section">
            <motion.h2 
              className="services-title"
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
              Our Exceptionalities
            </motion.h2>
            <motion.p
              className="services-description"
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
              Find out what makes us so special.
            </motion.p>
          </div>
        </div>
        
        <div className="services-content">
          <motion.div 
            className="services-image"
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
            <motion.img 
              key={currentImage} // Force re-render on image change
              src={getServiceImage(currentImage)} 
              alt={getServiceAlt(currentImage)}
              className="main-image"
              loading="lazy"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ 
                opacity: isTransitioning ? 0 : 1,
                filter: isTransitioning ? "blur(10px)" : "blur(0px)"
              }}
              transition={{ 
                duration: 0.4,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <div className="services-list">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                className={`service-item ${expandedService === service.id ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.1) }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div 
                  className="service-header"
                  onClick={() => toggleService(service.id)}
                >
                  <div className="service-info">
                    <div className="service-icon">
                      <img 
                        src={service.icon} 
                        alt={`${service.title} icon`} 
                        loading="lazy"
                      />
                    </div>
                    <h3 className="service-title">{service.title}</h3>
                  </div>
                  <div className="service-toggle">
                    <span className="plus-icon">+</span>
                  </div>
                </div>
                <motion.div 
                  className="service-description"
                  initial={false}
                  animate={{ 
                    height: expandedService === service.id ? 'auto' : 0,
                    opacity: expandedService === service.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p>{service.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

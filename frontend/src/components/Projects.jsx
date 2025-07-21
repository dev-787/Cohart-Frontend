import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Projects.scss';
import project1 from '@/assets/project1.png';
import project2 from '@/assets/project2.jpg';
import p1 from '@/assets/p1.png';
import p2 from '@/assets/p2.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-title-section">
            <motion.h2 
              className="projects-title"
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
              Exclusive Projects
            </motion.h2>
            <motion.p
              className="projects-description"
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
              Where elegance meets innovation—a seamless blend of architecture and luxury.
            </motion.p>
          </div>
          <button className="view-all-btn">
            <div className="btn-content">
              <div className="btn-text">
                <span>View All</span>
                <span>View All</span>
              </div>
              <div className="btn-arrow">
                <span className="arrow">→</span>
                <span className="arrow">→</span>
              </div>
            </div>
          </button>
        </div>
        
        <div className="projects-grid">
          <motion.div 
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div 
              className="project-image"
              onMouseEnter={() => setHoveredProject('project1')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.img 
                src={project1} 
                alt="Crestview estate"
                className="main-image"
                animate={{ 
                  opacity: hoveredProject === 'project1' ? 0 : 1,
                  filter: hoveredProject === 'project1' ? 'blur(8px)' : 'blur(0px)'
                }}
                transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.img 
                src={p1} 
                alt="Crestview estate hover"
                className="hover-image"
                animate={{ 
                  opacity: hoveredProject === 'project1' ? 1 : 0,
                  filter: hoveredProject === 'project1' ? 'blur(0px)' : 'blur(8px)'
                }}
                transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
            <div className="project-info">
              <div className="project-header">
                <h3 className="project-name">Crestview estate</h3>
                <p className="project-price">₹2,16,00,000</p>
              </div>
              <p className="project-description">A sanctuary with timeless design and exceptional craftsmanship to inspire your next chapter.</p>
              <div className="project-details">
                <span className="detail">4 Bedroom</span>
                <span className="detail">4 Bathroom</span>
                <span className="detail">2,650 sq.ft</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div 
              className="project-image"
              onMouseEnter={() => setHoveredProject('project2')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.img 
                src={project2} 
                alt="Sunset bluff"
                className="main-image"
                animate={{ 
                  opacity: hoveredProject === 'project2' ? 0 : 1,
                  filter: hoveredProject === 'project2' ? 'blur(8px)' : 'blur(0px)'
                }}
                transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
              <motion.img 
                src={p2} 
                alt="Sunset bluff hover"
                className="hover-image"
                animate={{ 
                  opacity: hoveredProject === 'project2' ? 1 : 0,
                  filter: hoveredProject === 'project2' ? 'blur(0px)' : 'blur(8px)'
                }}
                transition={{ duration: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>
            <div className="project-info">
              <div className="project-header">
                <h3 className="project-name">Sunset bluff</h3>
                <p className="project-price">₹1,18,00,000</p>
              </div>
              <p className="project-description">A modern masterpiece featuring panoramic views and open, light-filled spaces designed for tranquility.</p>
              <div className="project-details">
                <span className="detail">2 Bedroom</span>
                <span className="detail">2 Bathroom</span>
                <span className="detail">1,850 sq.ft</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

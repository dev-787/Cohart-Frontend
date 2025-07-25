import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Projects.scss';
import ProjectsComponent from '../components/Projects';
import project1 from '@/assets/project1.png';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.png';
import project4 from '@/assets/project4.png';
import p1 from '@/assets/p1.png';
import p2 from '@/assets/p2.png';
import p3 from '@/assets/p3.png';
import p4 from '@/assets/p4.png';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const navigate = useNavigate();

  const handleProjectClick = (projectId) => {
    // Immediate scroll to top before navigation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    
    // Navigate to project detail page
    navigate(`/project/${projectId}`);
  };

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
      
      {/* White container with custom project cards */}
      <div className="projects-white-container">
        <div className="projects-grid">
          {/* Project 1 - Crestview Estate */}
          <motion.div 
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => handleProjectClick('crestview-estate')}
            style={{ cursor: 'pointer' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
                  opacity: hoveredProject === 'project1' ? 0 : 1
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.img 
                src={p1} 
                alt="Crestview estate hover"
                className="hover-image"
                animate={{ 
                  opacity: hoveredProject === 'project1' ? 1 : 0
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
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
          
          {/* Project 2 - Sunset Bluff */}
          <motion.div 
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => handleProjectClick('sunset-bluff')}
            style={{ cursor: 'pointer' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
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
                  opacity: hoveredProject === 'project2' ? 0 : 1
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.img 
                src={p2} 
                alt="Sunset bluff hover"
                className="hover-image"
                animate={{ 
                  opacity: hoveredProject === 'project2' ? 1 : 0
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
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
          
          {/* Project 3 - New Project */}
          <motion.div 
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => handleProjectClick('royal-gardens')}
            style={{ cursor: 'pointer' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div 
              className="project-image"
              onMouseEnter={() => setHoveredProject('project3')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.img 
                src={project3} 
                alt="Royal Gardens"
                className="main-image"
                animate={{ 
                  opacity: hoveredProject === 'project3' ? 0 : 1
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.img 
                src={p3} 
                alt="Royal Gardens hover"
                className="hover-image"
                animate={{ 
                  opacity: hoveredProject === 'project3' ? 1 : 0
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>
            <div className="project-info">
              <div className="project-header">
                <h3 className="project-name">Royal Gardens</h3>
                <p className="project-price">₹3,45,00,000</p>
              </div>
              <p className="project-description">An exclusive estate offering luxurious amenities and breathtaking landscaped gardens for ultimate privacy.</p>
              <div className="project-details">
                <span className="detail">5 Bedroom</span>
                <span className="detail">6 Bathroom</span>
                <span className="detail">3,200 sq.ft</span>
              </div>
            </div>
          </motion.div>
          
          {/* Project 4 - New Project */}
          <motion.div 
            className="project-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => handleProjectClick('ocean-view-residence')}
            style={{ cursor: 'pointer' }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div 
              className="project-image"
              onMouseEnter={() => setHoveredProject('project4')}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.img 
                src={project4} 
                alt="Ocean View Residence"
                className="main-image"
                animate={{ 
                  opacity: hoveredProject === 'project4' ? 0 : 1
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.img 
                src={p4} 
                alt="Ocean View Residence hover"
                className="hover-image"
                animate={{ 
                  opacity: hoveredProject === 'project4' ? 1 : 0
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </div>
            <div className="project-info">
              <div className="project-header">
                <h3 className="project-name">Ocean View Residence</h3>
                <p className="project-price">₹2,75,00,000</p>
              </div>
              <p className="project-description">A contemporary home with stunning ocean views and sophisticated interiors designed for modern living.</p>
              <div className="project-details">
                <span className="detail">3 Bedroom</span>
                <span className="detail">3 Bathroom</span>
                <span className="detail">2,100 sq.ft</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

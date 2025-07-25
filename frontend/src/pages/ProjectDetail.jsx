import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProjectDetail.scss';
import project1 from '@/assets/project1.png';
import project2 from '@/assets/project2.jpg';
import project3 from '@/assets/project3.png';
import project4 from '@/assets/project4.png';
import p1 from '@/assets/p1.png';
import p2 from '@/assets/p2.png';
import p3 from '@/assets/p3.png';
import p4 from '@/assets/p4.png';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Project data
  const projectsData = {
    'crestview-estate': {
      id: 'crestview-estate',
      name: 'Crestview Estate',
      price: '₹2,16,00,000',
      description: 'A sanctuary with timeless design and exceptional craftsmanship to inspire your next chapter.',
      fullDescription: 'Nestled in the heart of luxury living, Crestview Estate represents the pinnacle of modern residential design where sophistication meets comfort in perfect harmony. This magnificent property combines contemporary architecture with timeless elegance, featuring spacious interiors adorned with premium Italian marble, custom millwork, and floor-to-ceiling windows that flood every room with natural light. The thoughtfully designed layout encompasses flowing open-plan living spaces, a gourmet kitchen equipped with top-of-the-line appliances, and private outdoor terraces that offer stunning panoramic views.',
      bedrooms: '4',
      bathrooms: '4',
      area: '2,650 sq.ft',
      mainImage: project1,
      hoverImage: p1,
      features: [
        'Premium Italian marble flooring',
        'Smart home automation system',
        'Private garden and terrace',
        'Dedicated parking for 2 cars',
        'High-end modular kitchen',
        'Designer lighting throughout'
      ],
      amenities: [
        '24/7 Security',
        'Swimming Pool',
        'Fitness Center',
        'Landscaped Gardens',
        'Club House',
        'Children\'s Play Area'
      ]
    },
    'sunset-bluff': {
      id: 'sunset-bluff',
      name: 'Sunset Bluff',
      price: '₹1,18,00,000',
      description: 'A modern masterpiece featuring panoramic views and open, light-filled spaces designed for tranquility.',
      fullDescription: 'Experience serenity at Sunset Bluff, where contemporary design meets natural beauty in a masterfully crafted residence that redefines modern living. This thoughtfully planned two-bedroom haven offers stunning panoramic city and landscape views through expansive floor-to-ceiling windows that bathe every corner in natural light. The sophisticated open-plan living spaces create a seamless flow between indoor and outdoor environments, featuring a state-of-the-art kitchen with premium appliances and comfortable lounging spaces that extend onto private balconies.',
      bedrooms: '2',
      bathrooms: '2',
      area: '1,850 sq.ft',
      mainImage: project2,
      hoverImage: p2,
      features: [
        'Floor-to-ceiling windows',
        'Open-plan living spaces',
        'Modern kitchen with island',
        'Master suite with walk-in closet',
        'Private balcony with city views',
        'Energy-efficient appliances'
      ],
      amenities: [
        'Rooftop Terrace',
        'Gym & Yoga Studio',
        'Concierge Services',
        'Business Center',
        'Guest Parking',
        'Retail Outlets'
      ]
    },
    'royal-gardens': {
      id: 'royal-gardens',
      name: 'Royal Gardens',
      price: '₹3,45,00,000',
      description: 'An exclusive estate offering luxurious amenities and breathtaking landscaped gardens for ultimate privacy.',
      fullDescription: 'Royal Gardens stands as a testament to luxury living, featuring an exclusive five-bedroom estate with meticulously landscaped gardens and world-class amenities. This prestigious property offers unmatched privacy and elegance, nestled within acres of professionally designed gardens with rare botanical specimens and tranquil water features. The expansive interior showcases premium imported materials, including Italian marble and custom fixtures, with sophisticated design elements like a grand foyer, formal dining room, home theater, and a master suite with spa-inspired bathroom overlooking the gardens.',
      bedrooms: '5',
      bathrooms: '6',
      area: '3,200 sq.ft',
      mainImage: project3,
      hoverImage: p3,
      features: [
        'Expansive landscaped gardens',
        'Private swimming pool',
        'Home theater room',
        'Wine cellar and bar',
        'Master suite with spa bathroom',
        'Triple-car garage with storage'
      ],
      amenities: [
        'Private Beach Access',
        'Tennis Court',
        'Spa & Wellness Center',
        'Fine Dining Restaurant',
        'Valet Parking',
        'Personal Butler Service'
      ]
    },
    'ocean-view-residence': {
      id: 'ocean-view-residence',
      name: 'Ocean View Residence',
      price: '₹2,75,00,000',
      description: 'A contemporary home with stunning ocean views and sophisticated interiors designed for modern living.',
      fullDescription: 'Discover the perfect blend of luxury and tranquility at Ocean View Residence, where contemporary architectural design meets the natural beauty of oceanfront living in this exceptional three-bedroom sanctuary. This stunning property offers breathtaking panoramic ocean views from every room through expansive floor-to-ceiling glass walls that create a seamless connection between indoor luxury and the endless beauty of the sea. The sophisticated interiors feature an open-concept layout with premium hardwood floors, a gourmet kitchen equipped with state-of-the-art appliances, and elegant living spaces that flow effortlessly onto private terraces perfect for entertaining or quiet contemplation.',
      bedrooms: '3',
      bathrooms: '3',
      area: '2,100 sq.ft',
      mainImage: project4,
      hoverImage: p4,
      features: [
        'Panoramic ocean views',
        'Floor-to-ceiling glass walls',
        'Gourmet kitchen with premium appliances',
        'Master bedroom with ocean-facing balcony',
        'Hardwood floors throughout',
        'Smart climate control system'
      ],
      amenities: [
        'Infinity Pool',
        'Private Beach Club',
        'Marina Access',
        'Sunset Deck',
        'Concierge Services',
        'Water Sports Equipment'
      ]
    }
  };

  const project = projectsData[projectId];

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-not-found">
          <h1>Project Not Found</h1>
          <button onClick={() => navigate('/projects')}>Back to Projects</button>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {/* Back Button */}
      <motion.button 
        className="back-button"
        onClick={() => navigate('/projects')}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back to Projects
      </motion.button>

      <div className="project-detail-container">
        {/* Hero Section */}
        <motion.div 
          className="project-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="project-images">
            <motion.img 
              src={project.mainImage} 
              alt={project.name}
              className="main-project-image"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.img 
              src={project.hoverImage} 
              alt={`${project.name} interior`}
              className="secondary-project-image"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </div>
          
          <motion.div 
            className="project-summary"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="project-title">{project.name}</h1>
            <p className="project-price">{project.price}</p>
            <p className="project-short-description">{project.description}</p>
            
            <div className="project-specs">
              <div className="spec-item">
                <span className="spec-label">Bedrooms</span>
                <span className="spec-value">{project.bedrooms}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Bathrooms</span>
                <span className="spec-value">{project.bathrooms}</span>
              </div>
              <div className="spec-item">
                <span className="spec-label">Area</span>
                <span className="spec-value">{project.area}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Detailed Information */}
        <motion.div 
          className="project-details-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="details-grid">
            <div className="description-section">
              <h2>About This Property</h2>
              <p>{project.fullDescription}</p>
            </div>

            <div className="features-section">
              <h3>Key Features</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="amenities-section">
              <h3>Amenities</h3>
              <ul className="amenities-list">
                {project.amenities.map((amenity, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  >
                    {amenity}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="project-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2>Interested in {project.name}?</h2>
          <p>Contact us today to schedule a viewing or get more information about this amazing property.</p>
          <div className="cta-buttons">
            <motion.button 
              className="primary-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Schedule a Viewing
            </motion.button>
            <motion.button 
              className="secondary-cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Get More Info
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;

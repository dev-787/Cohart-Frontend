import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.scss';

// Import testimonial images
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import t4 from '../assets/t4.png';
import t5 from '../assets/t5.png';

// Import FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';


const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <motion.h2 
            className="testimonials-title"
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
            Testimonials
          </motion.h2>
          <motion.p 
            className="testimonials-description"
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
            Hear from our happy clients about their experience working with S2 Realty and the quality of our craftsmanship.
          </motion.p>
        </div>

        {/* Testimonial Carousel */}
        <motion.div 
          className="testimonial-carousel-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="testimonial-carousel">
            <div className="testimonial-track">
              {/* First set of cards */}
              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={t1} alt="Sarah Johnson" className="profile-image" />
                </div>
                <div className="testimonial-content">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">"S2 Realty delivered beyond our expectations. Absolutely stunning craftsmanship!"</p>
                  <div className="testimonial-author">
                    <h4>Sarah Johnson</h4>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={t2} alt="Michael Chen" className="profile-image" />
                </div>
                <div className="testimonial-content">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">"Professional service and attention to detail that's second to none."</p>
                  <div className="testimonial-author">
                    <h4>Michael Chen</h4>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={t3} alt="Emma Williams" className="profile-image" />
                </div>
                <div className="testimonial-content">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">"Our dream home became reality thanks to their exceptional work."</p>
                  <div className="testimonial-author">
                    <h4>Emma Williams</h4>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={t4} alt="David Rodriguez" className="profile-image" />
                </div>
                <div className="testimonial-content">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">"Quality craftsmanship that speaks for itself. Highly recommended!"</p>
                  <div className="testimonial-author">
                    <h4>David Rodriguez</h4>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={t5} alt="Lisa Thompson" className="profile-image" />
                </div>
                <div className="testimonial-content">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">"From concept to completion, they exceeded every milestone perfectly."</p>
                  <div className="testimonial-author">
                    <h4>Lisa Thompson</h4>
                  </div>
                </div>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={t1} alt="Sarah Johnson" className="profile-image" />
                </div>
                <div className="testimonial-content">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">"S2 Realty delivered beyond our expectations. Absolutely stunning craftsmanship!"</p>
                  <div className="testimonial-author">
                    <h4>Sarah Johnson</h4>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={t2} alt="Michael Chen" className="profile-image" />
                </div>
                <div className="testimonial-content">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">"Professional service and attention to detail that's second to none."</p>
                  <div className="testimonial-author">
                    <h4>Michael Chen</h4>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={t3} alt="Emma Williams" className="profile-image" />
                </div>
                <div className="testimonial-content">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">"Our dream home became reality thanks to their exceptional work."</p>
                  <div className="testimonial-author">
                    <h4>Emma Williams</h4>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={t4} alt="David Rodriguez" className="profile-image" />
                </div>
                <div className="testimonial-content">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">"Quality craftsmanship that speaks for itself. Highly recommended!"</p>
                  <div className="testimonial-author">
                    <h4>David Rodriguez</h4>
                  </div>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-profile">
                  <img src={t5} alt="Lisa Thompson" className="profile-image" />
                </div>
                <div className="testimonial-content">
                  <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                  <p className="testimonial-text">"From concept to completion, they exceeded every milestone perfectly."</p>
                  <div className="testimonial-author">
                    <h4>Lisa Thompson</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;

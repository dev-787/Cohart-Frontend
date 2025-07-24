import React from 'react';
import './Contact.scss';
import handsVideo from '../assets/hands.webm';

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>Luxury isn't a price—it's a feeling we build.</p>
        
        <div className="video-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="hands-video"
          >
            <source src={handsVideo} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

      </div>
    </section>
  );
};

export default Contact;

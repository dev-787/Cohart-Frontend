import React from 'react';
import './Testimonials.scss';

// Import testimonial images
import t1 from '../assets/t1.png';
import t2 from '../assets/t2.png';
import t3 from '../assets/t3.png';
import t4 from '../assets/t4.png';
import t5 from '../assets/t5.png';
import t6 from '../assets/t6.png';
import t7 from '../assets/t7.jpg';
import t8 from '../assets/t8.png';
import t9 from '../assets/t9.jpg';
import t10 from '../assets/t10.jpg';

// Import FontAwesome
import '@fortawesome/fontawesome-free/css/all.min.css';

const testimonials = [
  // First row - moving right to left
  [
    { 
      name: "Sarah Johnson", 
      image: t1, 
      text: "S2 Realty delivered beyond our expectations. Absolutely stunning craftsmanship!" 
    },
    { 
      name: "Michael Chen", 
      image: t2, 
      text: "Professional service and attention to detail that's second to none." 
    },
    { 
      name: "Emma Williams", 
      image: t3, 
      text: "Our dream home became reality thanks to their exceptional work." 
    },
  ],
  // Second row - moving left to right
  [
    { 
      name: "David Rodriguez", 
      image: t4, 
      text: "Quality craftsmanship that speaks for itself. Highly recommended!" 
    },
    { 
      name: "Lisa Thompson", 
      image: t5, 
      text: "From concept to completion, they exceeded every milestone perfectly." 
    },
    { 
      name: "James Wilson", 
      image: t6, 
      text: "Incredible attention to detail and timely project delivery." 
    },
  ],
  // Third row - moving right to left
  [
    { 
      name: "Sofia Martinez", 
      image: t7, 
      text: "S2 Realty transformed our vision into an architectural masterpiece." 
    },
    { 
      name: "Ryan Cooper", 
      image: t8, 
      text: "Outstanding quality and professionalism throughout the entire process." 
    },
    { 
      name: "Olivia Brown", 
      image: t9, 
      text: "Their expertise and dedication truly made all the difference." 
    },
    { 
      name: "Alex Turner", 
      image: t10, 
      text: "Exceptional service with results that speak for themselves." 
    }
  ]
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <div className="testimonials-header">
          <h2 className="testimonials-title">Testimonials</h2>
          <p className="testimonials-description">
            Hear from our happy clients about their experience working with S2 Realty and the quality of our craftsmanship.
          </p>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;

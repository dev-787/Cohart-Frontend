import React, { useState, useEffect } from 'react';
import './Hero.scss';
import Transition from './Transition';
import heroPng from '../assets/XenbRolVvdkVo2rMROZx1uBzlUI1.png';

const Hero = () => {
  const [startAnimations, setStartAnimations] = useState(false);

  useEffect(() => {
    // Start animations after a short delay to ensure preloader is complete
    const timer = setTimeout(() => {
      setStartAnimations(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className={`hero-title ${startAnimations ? 'animate' : ''}`}>
          Discover the perfect place to call home
        </h1>
        <p className={`hero-subtitle ${startAnimations ? 'animate' : ''}`}>
          Embrace luxury and indulge in a life of elegance, serenity, and paradise
        </p>
        <img 
          src={heroPng} 
          alt="One8 Hero" 
          className={`hero-image ${startAnimations ? 'animate' : ''}`} 
        />
      </div>
      <Transition />
    </section>
  );
};

export default Hero;

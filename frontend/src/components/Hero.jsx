import React from 'react';
import './Hero.scss';
import Navbar from './Navbar';
import Transition from './Transition';
import heroPng from '../assets/XenbRolVvdkVo2rMROZx1uBzlUI1.png';

const Hero = () => {
  return (
    <section className="hero">
      <Navbar />
      <div className="hero-content">
        <h1 className="hero-title">Discover the perfect place to call home</h1>
        <p className="hero-subtitle">Embrace luxury and indulge in a life of elegance, serenity, and paradise</p>
        <img src={heroPng} alt="One8 Hero" className="hero-image" />
      </div>
      <Transition />
    </section>
  );
};

export default Hero;

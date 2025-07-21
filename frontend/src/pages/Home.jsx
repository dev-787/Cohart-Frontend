import React from 'react';
import { Hero, Projects, Services, AboutUs, Testimonials } from '@/components';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <Services />
      <AboutUs />
      <Testimonials />
      {/* Future sections can be added here */}
    </div>
  );
};

export default Home;

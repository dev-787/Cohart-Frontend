import React from 'react';
import { Hero, Projects, AboutUs } from '@/components';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <AboutUs />
      {/* Future sections can be added here */}
    </div>
  );
};

export default Home;

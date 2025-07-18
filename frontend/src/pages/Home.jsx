import React from 'react';
import { Hero, AboutUs } from '@/components';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <AboutUs />
      {/* Future sections can be added here */}
    </div>
  );
};

export default Home;

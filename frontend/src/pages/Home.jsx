import React from 'react';
import { Hero, Projects, Services, AboutUs, Testimonials, Contact } from '@/components';
import './Home.scss';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Projects />
      <Services />
      <AboutUs />
      <Testimonials />
<Contact />
      {/* Future sections can be added here */}
    </div>
  );
};

export default Home;

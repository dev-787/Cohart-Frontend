import React from 'react';
import { Hero, Projects, Services, AboutUs, Testimonials, Contact, Footer } from '@/components';
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
      <Footer />
      {/* Future sections can be added here */}
    </div>
  );
};

export default Home;

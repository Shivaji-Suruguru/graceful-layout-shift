
import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialSection from '../components/TestimonialSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <TestimonialSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

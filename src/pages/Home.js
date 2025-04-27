import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import ConsultationBanner from '../components/layout/ConsultationBanner';
import ImageGallery from '../components/home/ImageGallery';
import About from '../components/home/About';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';
import Projects from '../components/home/ProjectsSection';
import FAQSection from '../components/home/FAQ';
import ContactCTA from '../components/home/ContactCTA';
import TrustedBy from '../components/home/TrustedBy';
import StickyConsultationBanner from '../components/layout/StickyConsultationBanner';


const Home = () => {
  const location = useLocation();

  // Handle hash links when page loads
  useEffect(() => {
    // If there's a hash in the URL (e.g., /#about-section)
    if (location.hash) {
      // Remove the # character
      const sectionId = location.hash.substring(1);
      
      // Wait for the DOM to be fully loaded
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          // Account for fixed header
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <HomeWrapper>
      <Hero />
      <StickyConsultationBanner />
      
      <section id="about-section">
        <About />
      </section>

      <ImageGallery />
      
      <Stats />
      
      <section id="services-section">
        <Services />
      </section>
      
      <section id="projects-section">
        <Projects />
      </section>
      
      <TrustedBy />

      <FAQSection />
      
      <section id="contact-section">
        <ContactCTA />
      </section>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main`
  // Any additional styling specific to the home page
  
  section {
    scroll-margin-top: 80px; // Ensures sections don't get hidden behind fixed header when scrolled to
  }
`;

export default Home;
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef(null);
  
  const projects = [
    {
      id: 1,
      title: 'Modern kitchen lighting',
      description: 'Lighting played a pivotal role in transforming this kitchen into a functional and visually striking space. We designed and installed a custom lighting solution that layered ambient, task, and accent lighting to enhance both usability and mood. From under-cabinet LEDs that brighten work surfaces to statement pendant lights that anchor the island, every fixture was carefully selected to complement the kitchen\'s modern aesthetic. The result is a beautifully lit environment that elevates everyday living and entertaining.',
      image: '/images/kitchen.jpg',
      tags: ['Kitchen', '4 weeks'],
      testimonial: {
        text: 'The custom lighting CDAY designed completely transformed our kitchen — it\'s not only beautiful but also incredibly functional. From the ambient glow to the focused task lighting, every detail was thoughtfully done. CDAY Lighting truly brought our vision to life.',
        logo: '/images/tqm-logo.png'
      }
    },
    {
      id: 2,
      title: 'Architectural entranceway',
      description: 'Our team designed and built a striking vertical LED lighting which adds a bold architectural element to this entranceway, creating a warm and welcoming ambiance. The sleek lines and soft glow not only enhance visibility but also elevate the overall aesthetic, making a powerful first impression.',
      image: '/images/entranceway.jpg',
      tags: ['External Works', '1 month'],
      testimonial: {
        text: 'The vertical LED lighting has given our entrance a sleek, modern vibe that immediately grabs attention. It creates a warm, welcoming atmosphere, and guests always remark on it. CDAY Lighting brought our vision to life perfectly.',
        logo: '/images/deicorp-logo.png'
      }
    },
    {
      id: 3,
      title: 'High-rise apartments',
      description: 'We revitalized this high-rise apartment with a fresh, modern design, focusing on sleek fixtures, high-end finishes, and strategically placed lighting. The lighting design was carefully tailored to highlight the apartment\'s best features, creating an ambiance of sophistication and warmth. The layout was optimized to maximize space, resulting in a luxurious, functional, and visually stunning living environment.',
      image: '/images/highrise.jpg',
      tags: ['Apartment', '6 weeks'],
      testimonial: {
        text: 'CDAY Lighting really stepped up our high-rise apartment with sleek, functional lighting that made the space feel brighter and more polished. Ruth, our lighting specialist, was awesome to work with — her design ideas made all the difference.',
        logo: '/images/deicorp-logo.png'
      }
    }
  ];
  
  useEffect(() => {
    const projectsSection = projectsRef.current;
    if (!projectsSection) return;
    
    // Get all project cards
    const cards = projectsSection.querySelectorAll('.project-card');
    
    // Skip the first card (it stays in place)
    for (let i = 1; i < cards.length; i++) {
      const card = cards[i];
      const prevCard = cards[i-1];
      
      // Set initial position - cards start with normal positioning
      gsap.set(card, { 
        y: 0,
        position: 'relative',
        zIndex: i + 1 // Higher cards need higher z-index
      });
      
      // Create the scroll animation for this card
      gsap.to(card, {
        y: -160, // Move up to overlap previous card
        scrollTrigger: {
          trigger: prevCard, // Animation starts when previous card is in view
          start: "center center+=100", // Start when previous card is at center
          end: "bottom center", // End when bottom of previous card reaches center
          scrub: 1, // Smooth scrubbing effect
          // markers: true, // Uncomment for debugging
        }
      });
    }
    
    // Clean up
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <ProjectsWrapper>
      <div className="container">
        <ProjectsHeading>
          <span>Our work</span>
          <h2>Get inspired by our work</h2>
          <p>See how we've transformed homes with our expert customisation and attention to detail.</p>
        </ProjectsHeading>
        
        <ProjectsList ref={projectsRef}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              total={projects.length}
            />
          ))}
        </ProjectsList>
      </div>
    </ProjectsWrapper>
  );
};

const ProjectsWrapper = styled.section`
  padding: ${props => props.theme.spacing.section};
  position: relative;
  background-color: ${props => props.theme.colors.background};
`;

const ProjectsHeading = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  span {
    display: inline-block;
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.text};
    padding: 5px 15px;
    border-radius: 50px;
    font-size: 14px;
    margin-bottom: 20px;
    font-weight: 500;
  }
  
  h2 {
    font-size: 50px;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.black};
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 36px;
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: ${props => props.theme.colors.lightText};
  }
`;

const ProjectsList = styled.div`
  margin-top: 80px;
  position: relative;
  
  /* Ensure enough space for the project cards */
  padding-bottom: 300px;
  
  /* Add larger padding on mobile */
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding-bottom: 500px;
  }
`;

export default Projects;
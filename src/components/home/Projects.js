import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const projectsContainerRef = useRef(null);
  
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
    const section = sectionRef.current;
    const container = projectsContainerRef.current;
    
    if (!section || !container) return;
    
    // Set container height to allow for scrolling
    gsap.set(container, { height: '200vh' });
    
    // Get all project cards
    const cards = document.querySelectorAll('.project-card');
    const totalCards = cards.length;
    
    // Break the scroll into sections for each card
    const sectionSize = 1 / totalCards;
    
    // Function to update card visibility and animation
    const updateCards = (progress) => {
      // Determine which card should be active based on scroll progress
      let activeIndex = Math.floor(progress * totalCards);
      activeIndex = Math.min(activeIndex, totalCards - 1);
      
      cards.forEach((card, index) => {
        // Remove all classes first
        card.classList.remove('active', 'entering', 'exiting');
        
        if (index === activeIndex) {
          // This is the active card
          card.classList.add('active');
          gsap.to(card, { 
            opacity: 1, 
            y: 0, 
            display: 'block',
            duration: 0.5 
          });
        } 
        else if (index === activeIndex + 1 && activeIndex < totalCards - 1) {
          // This is the next card preparing to enter
          card.classList.add('entering');
          
          // Calculate how close it is to becoming active
          const nextThreshold = (index * sectionSize);
          const localProgress = (progress - (activeIndex * sectionSize)) / sectionSize;
          
          if (localProgress > 0.7) {
            // Start transitioning this card in
            const entryProgress = (localProgress - 0.7) / 0.3;
            gsap.to(card, { 
              opacity: entryProgress, 
              y: 50 * (1 - entryProgress), 
              display: 'block',
              duration: 0.2 
            });
          } else {
            // Keep it hidden but ready
            gsap.set(card, { 
              opacity: 0, 
              y: 50, 
              display: 'none'
            });
          }
        }
        else if (index === activeIndex - 1) {
          // This is the previous card that's exiting
          card.classList.add('exiting');
          
          // Calculate exit progress
          const prevThreshold = (index * sectionSize);
          const localProgress = (progress - prevThreshold) / sectionSize;
          
          if (localProgress < 0.3) {
            // Still showing but fading out
            const exitProgress = 1 - (localProgress / 0.3);
            gsap.to(card, { 
              opacity: exitProgress, 
              y: -30 * (1 - exitProgress), 
              display: 'block',
              duration: 0.2 
            });
          } else {
            // Fully hidden
            gsap.set(card, { 
              opacity: 0, 
              y: -30, 
              display: 'none'
            });
          }
        }
        else {
          // Not active, entering, or exiting - keep hidden
          gsap.set(card, { 
            opacity: 0, 
            display: 'none'
          });
        }
      });
    };
    
    // Set up ScrollTrigger
    const scrollTrigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        // Get scroll progress (0 to 1)
        const progress = self.progress;
        updateCards(progress);
      },
      invalidateOnRefresh: true
    });
    
    // Initialize first card as visible
    updateCards(0);
    
    // Cleanup
    return () => {
      if (scrollTrigger) scrollTrigger.kill();
    };
  }, []);
  
  return (
    <ProjectsSection ref={sectionRef}>
      <div className="container">
        <ProjectsHeading>
          <SectionTag>Our work</SectionTag>
          <h2>Get inspired by our work</h2>
          <p>See how we've transformed homes with our expert customisation and attention to detail.</p>
        </ProjectsHeading>
        
        <ProjectsContainer ref={projectsContainerRef}>
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              total={projects.length}
            />
          ))}
        </ProjectsContainer>
      </div>
    </ProjectsSection>
  );
};

const ProjectsSection = styled.section`
  padding: 80px 0;
  position: relative;
  overflow: hidden;
`;

const ProjectsHeading = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 48px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 18px;
    color: #666;
  }
`;

const SectionTag = styled.div`
  display: inline-block;
  background-color: #222;
  color: white;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 14px;
  margin-bottom: 20px;
`;

const ProjectsContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 600px; // Minimum height for the container
  // Height will be set by GSAP
`;

export default Projects;
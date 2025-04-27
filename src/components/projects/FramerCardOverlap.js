import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const FramerCardOverlap = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const timelineRef = useRef(null);
  
  // Project data
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
  
  // Create refs for each card
  if (cardRefs.current.length !== projects.length) {
    cardRefs.current = Array(projects.length).fill().map((_, i) => cardRefs.current[i] || React.createRef());
  }
  
  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const cards = cardRefs.current.map(ref => ref.current);
    
    if (!section || !container || !cards.length) return;
    
    // Create a context for cleanup
    const ctx = gsap.context(() => {
      // Set initial states - hide all cards except the first one
      gsap.set(cards[0], { autoAlpha: 1, y: 0 });
      gsap.set(cards.slice(1), { autoAlpha: 0, y: 60 });
      
      // Create master timeline with minimal scroll space
      const masterTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 10%",
          end: "+=600", // Fixed small pixel value instead of vh units
          pin: container,
          anticipatePin: 1,
          scrub: 0.5,
          pinSpacing: false, // Prevents extra space
          invalidateOnRefresh: true
        }
      });
      
      // Store the timeline reference
      timelineRef.current = masterTimeline;
      
      // Add card transitions to the master timeline
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          // Create a timeline for this transition pair
          const transitionTimeline = gsap.timeline();
          
          // Current card fades out and moves up
          transitionTimeline.to(card, {
            autoAlpha: 0,
            y: -60,
            duration: 0.4,
            ease: "power2.inOut"
          }, 0);
          
          // Next card fades in and moves up from below
          transitionTimeline.to(cards[index + 1], {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: "power2.out"
          }, 0.1); // Small overlap for smoother transition
          
          // Add this transition to the master timeline
          const position = index / (cards.length - 1);
          masterTimeline.add(transitionTimeline, position);
        }
      });
    });
    
    // Add small spacer directly to the DOM instead of using margin
    const spacer = document.createElement('div');
    spacer.style.height = "600px"; // Fixed small height
    spacer.style.width = "1px"; // Minimal width to avoid affecting layout
    spacer.style.position = "absolute"; // Take out of document flow
    spacer.style.opacity = "0"; // Make invisible
    section.appendChild(spacer);
    
    // Cleanup function
    return () => {
      ctx.revert();
      if (spacer && spacer.parentNode) {
        spacer.parentNode.removeChild(spacer);
      }
    };
  }, [projects.length]);
  
  // Add a classname to the section to target it in CSS
return (
  <Section ref={sectionRef} className="projects-section">
    <HeadingContainer>
      <SectionTag>Our work</SectionTag>
      <h2>Get inspired by our work</h2>
      <p>See how we've transformed homes with our expert customisation and attention to detail.</p>
    </HeadingContainer>
    
    <CardsContainer ref={containerRef}>
      {projects.map((project, index) => (
        <Card 
          key={project.id} 
          ref={cardRefs.current[index]}
          $isDark={index % 2 !== 0}
          style={{ opacity: index === 0 ? 1 : 0 }}
        >
          <CardInner $isDark={index % 2 !== 0}>
            <CardImage>
              <img src={project.image || `/api/placeholder/600/400`} alt={project.title} />
            </CardImage>
            <CardContent $isDark={index % 2 !== 0}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              
              {project.tags && (
                <TagContainer>
                  {project.tags.map((tag, i) => (
                    <Tag key={i} $isDark={index % 2 !== 0}>{tag}</Tag>
                  ))}
                </TagContainer>
              )}
              
              {project.testimonial && (
                <Testimonial $isDark={index % 2 !== 0}>
                  <Quote $isDark={index % 2 !== 0}>"</Quote>
                  <p>{project.testimonial.text}</p>
                  {project.testimonial.logo && (
                    <ClientLogo>
                      <img 
                        src={project.testimonial.logo} 
                        alt="Client logo" 
                        className={index % 2 !== 0 ? "invert" : ""} 
                      />
                    </ClientLogo>
                  )}
                </Testimonial>
              )}
            </CardContent>
          </CardInner>
        </Card>
      ))}
    </CardsContainer>
    
    {/* Add a footer element with some bottom spacing */}
    <div className="section-end-marker" style={{ height: "700px", width: "100%" }}></div>
  </Section>
);
};

// Styled components
const Section = styled.section`
  position: relative;
  padding: 40px 0 0; // Reduced top padding, removed bottom padding
  min-height: 100vh;
  overflow: visible;
`;

const HeadingContainer = styled.div`
  text-align: center;
  max-width: 1200px;
  margin: 0 auto 30px; // Reduced bottom margin
  padding: 0 20px;
  
  h2 {
    font-size: 42px; // Slightly smaller heading
    font-weight: 700;
    margin-bottom: 15px; // Reduced margin
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    font-size: 16px; // Slightly smaller text
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

const CardsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 600px; // Increased from 450px to match larger card size
  padding: 0 20px;
  z-index: 10;
  margin: 0 auto; // Center horizontally
`;

const Card = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1200px;
  will-change: transform, opacity;
`;

const CardInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${props => props.$isDark ? '#111' : '#f5f5f5'};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 420px; // Increased height from 380px to 420px
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    height: auto;
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  
  @media (max-width: 768px) {
    min-height: 200px;
  }
`;

const CardContent = styled.div`
  padding: 28px; // Slightly increased padding
  color: ${props => props.$isDark ? 'white' : 'black'};
  overflow-y: auto;
  max-height: 100%;
  
  h2 {
    font-size: 26px; // Slightly larger heading
    font-weight: 700;
    margin-bottom: 16px;
  }
  
  p {
    line-height: 1.5;
    margin-bottom: 16px;
    color: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.8)' : '#666'};
    font-size: 14px;
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background-color: ${props => props.$isDark ? '#333' : 'black'};
  color: white;
  padding: 4px 12px;
  border-radius: 50px;
  font-size: 12px;
  font-weight: 500;
`;

const Testimonial = styled.div`
  position: relative;
  padding: 15px 0;
  border-top: 1px solid ${props => props.$isDark ? '#333' : '#ddd'};
  margin-top: 15px;
  
  p {
    font-style: italic;
    padding-left: 15px;
    margin-bottom: 10px;
    font-size: 13px;
  }
`;

const Quote = styled.span`
  position: absolute;
  top: 8px;
  left: -5px;
  font-size: 30px;
  opacity: 0.5;
  color: ${props => props.$isDark ? 'white' : 'black'};
`;

const ClientLogo = styled.div`
  width: 70px;
  height: 35px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

// Make sure export is correct
const FramerCardOverlapComponent = FramerCardOverlap;
export default FramerCardOverlapComponent;
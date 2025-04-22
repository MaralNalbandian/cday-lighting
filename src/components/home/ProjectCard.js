import React, { useRef } from 'react';
import styled from 'styled-components';

const ProjectCard = ({ project, index, total }) => {
  const cardRef = useRef(null);
  const isDark = index % 2 !== 0; // odd cards are dark, even cards are light
  
  return (
    <CardWrapper 
      ref={cardRef} 
      className="project-card"
      $isDark={isDark}
      $index={index}
    >
      <CardImage>
        <img src={project.image} alt={project.title} />
      </CardImage>
      
      <CardContent $isDark={isDark}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        
        {project.tags && (
          <TagContainer>
            {project.tags.map((tag, i) => (
              <Tag key={i} $isDark={isDark}>{tag}</Tag>
            ))}
          </TagContainer>
        )}
        
        {project.duration && (
          <Duration $isDark={isDark}>{project.duration}</Duration>
        )}
        
        {project.testimonial && (
          <Testimonial $isDark={isDark}>
            <Quote $isDark={isDark}>"</Quote>
            <p>{project.testimonial.text}</p>
            {project.testimonial.logo && (
              <ClientLogo>
                <img src={project.testimonial.logo} alt="Client logo" />
              </ClientLogo>
            )}
          </Testimonial>
        )}
      </CardContent>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${props => props.$isDark ? '#111' : '#f8f8f8'};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: ${props => props.theme.shadows.card};
  margin-bottom: ${props => props.$index === 0 ? '80px' : '300px'}; // Increased space between cards for scroll animation
  will-change: transform; // Optimize for animation performance
  
  /* No initial transform, will be handled by GSAP */
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    margin-bottom: ${props => props.$index === 0 ? '60px' : '200px'};
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    min-height: 300px;
  }
`;

const CardContent = styled.div`
  padding: 40px;
  
  h2 {
    font-size: 32px;
    margin-bottom: 20px;
    color: ${props => props.$isDark ? 'white' : props.theme.colors.black};
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 20px;
    color: ${props => props.$isDark ? '#ccc' : props.theme.colors.lightText};
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  background-color: ${props => props.$isDark ? '#333' : '#eee'};
  color: ${props => props.$isDark ? 'white' : props.theme.colors.text};
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 14px;
  border: ${props => props.$isDark ? 'none' : `1px solid ${props.theme.colors.darkGray}`};
`;

const Duration = styled.div`
  background-color: ${props => props.$isDark ? '#333' : '#eee'};
  color: ${props => props.$isDark ? 'white' : props.theme.colors.text};
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 20px;
  border: ${props => props.$isDark ? 'none' : `1px solid ${props.theme.colors.darkGray}`};
`;

const Testimonial = styled.div`
  position: relative;
  padding: 20px 0;
  border-top: 1px solid ${props => props.$isDark ? '#333' : props.theme.colors.darkGray};
  
  p {
    font-style: italic;
    margin-bottom: 10px;
    color: ${props => props.$isDark ? '#ccc' : props.theme.colors.lightText};
  }
`;

const Quote = styled.span`
  position: absolute;
  top: 10px;
  left: -10px;
  font-size: 40px;
  color: ${props => props.$isDark ? 'white' : props.theme.colors.primary};
  opacity: 0.5;
`;

const ClientLogo = styled.div`
  width: 80px;
  height: 40px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export default ProjectCard;
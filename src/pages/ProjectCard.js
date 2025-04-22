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
  background-color: ${props => props.$isDark ? props.theme.colors.dark : props.theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: ${props => props.theme.shadows.card};
  margin-bottom: ${props => props.$index === 0 ? '80px' : '300px'}; // Increased space between cards for scroll animation
  will-change: transform; // Optimize for animation performance
  
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
    font-weight: 700;
    margin-bottom: 20px;
    color: ${props => props.$isDark ? props.theme.colors.white : props.theme.colors.black};
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 20px;
    color: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.8)' : props.theme.colors.lightText};
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Tag = styled.span`
  background-color: ${props => props.$isDark ? '#333' : '#f1f1f1'};
  color: ${props => props.$isDark ? props.theme.colors.white : props.theme.colors.text};
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 500;
`;

const Testimonial = styled.div`
  position: relative;
  padding: 20px 0;
  border-top: 1px solid ${props => props.$isDark ? '#333' : props.theme.colors.darkGray};
  
  p {
    font-style: italic;
    margin-bottom: 15px;
    color: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.8)' : props.theme.colors.lightText};
  }
`;

const Quote = styled.span`
  position: absolute;
  top: 10px;
  left: -10px;
  font-size: 40px;
  color: ${props => props.$isDark ? props.theme.colors.white : props.theme.colors.primary};
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
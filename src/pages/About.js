import React from 'react';
import styled from 'styled-components';
import ConsultationBanner from '../components/layout/ConsultationBanner';

const About = () => {
  return (
    <AboutPageWrapper>
      <ConsultationBanner />
      
      <HeroSection>
        <div className="container">
          <h1>About CDAY Lighting</h1>
          <p>Your trusted partner for quality lighting across Australia</p>
        </div>
      </HeroSection>
      
      <section className="about-content">
        <div className="container">
          <AboutGrid>
            <AboutText>
              <h2>Our Story</h2>
              <p>
                CDAY Lighting was established as a dedicated division of CDAY Electrical Wholesalers, 
                building upon decades of industry experience to create a specialized lighting solutions provider.
              </p>
              <p>
                What began as a small team of lighting enthusiasts has grown into a company of over 30 specialists, 
                each bringing unique expertise in different aspects of lighting design and implementation.
              </p>
              <p>
                Over the years, we've transformed countless spaces across Australia, from residential homes 
                to commercial buildings, always with our signature attention to detail and commitment to quality.
              </p>
            </AboutText>
            
            <AboutImage>
              <img src="/images/about-team.jpg" alt="CDAY Lighting team" />
            </AboutImage>
          </AboutGrid>
          
          <AboutGrid reversed>
            <AboutText>
              <h2>Our Approach</h2>
              <p>
                We believe that exceptional lighting does more than illuminate a space—it transforms the experience of 
                being in that space. Our approach focuses on understanding the unique requirements and possibilities 
                of each project.
              </p>
              <p>
                Working closely with architects, designers, builders, and homeowners, we create custom lighting 
                solutions that enhance the functional and aesthetic qualities of every space.
              </p>
              <p>
                Our process combines technical expertise with creative vision, ensuring that every fixture 
                serves its purpose while contributing to the overall design narrative.
              </p>
            </AboutText>
            
            <AboutImage>
              <img src="/images/about-approach.jpg" alt="CDAY Lighting approach" />
            </AboutImage>
          </AboutGrid>
          
          <TeamSection>
            <h2>Our Team</h2>
            <p>
              CDAY Lighting is powered by a team of dedicated professionals with diverse backgrounds in 
              lighting design, electrical engineering, architecture, and interior design.
            </p>
            <p>
              Led by our founder, Chris Day, our specialists bring together technical knowledge and 
              creative vision to deliver lighting solutions that exceed expectations.
            </p>
            
            {/* Additional team information would go here */}
          </TeamSection>
        </div>
      </section>
    </AboutPageWrapper>
  );
};

const AboutPageWrapper = styled.main`
  padding-top: 80px; // Space for fixed header
`;

const HeroSection = styled.section`
  background-color: ${props => props.theme.colors.secondary};
  padding: 100px 0;
  text-align: center;
  
  h1 {
    font-size: 48px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 20px;
    color: ${props => props.theme.colors.gray};
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    padding: 80px 0;
    
    h1 {
      font-size: 36px;
    }
    
    p {
      font-size: 18px;
    }
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.reversed ? '1fr 1fr' : '1fr 1fr'};
  gap: 60px;
  align-items: center;
  padding: 100px 0;
  
  ${props => props.reversed && `
    direction: rtl;
  `}
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 60px 0;
    direction: ltr;
  }
`;

const AboutText = styled.div`
  direction: ltr;
  
  h2 {
    font-size: 36px;
    margin-bottom: 30px;
  }
  
  p {
    margin-bottom: 20px;
    line-height: 1.6;
    color: ${props => props.theme.colors.gray};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    h2 {
      font-size: 28px;
    }
  }
`;

const AboutImage = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  direction: ltr;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: ${props => props.theme.shadows.card};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    min-height: 300px;
  }
`;

const TeamSection = styled.div`
  padding: 80px 0;
  text-align: center;
  
  h2 {
    font-size: 36px;
    margin-bottom: 30px;
  }
  
  p {
    max-width: 800px;
    margin: 0 auto 20px;
    line-height: 1.6;
    color: ${props => props.theme.colors.gray};
  }
`;

export default About;
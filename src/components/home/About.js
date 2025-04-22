import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutWrapper>
      <div className="container">
        <AboutContainer>
          <AboutHeading>
            <span>About us</span>
            <h2>lighting specialists</h2>
          </AboutHeading>
          
          <AboutContent>
            <p>
              At CDAY Lighting, we specialise in delivering smart, functional, and visually
              striking lighting solutions for projects of all sizes. As a dedicated division of
              CDAY Electrical Wholesalers, we bring together deep industry knowledge, a
              curated selection of high-performance products, and a commitment to
              innovation that ensures every space we light exceeds expectations.
            </p>
            <p>
              Whether you're an architect, interior designer, builder, developer, contractor,
              or homeowner, we offer tailored lighting solutions that align with your project's
              unique goals — from concept to completion.
            </p>
          </AboutContent>
        </AboutContainer>
      </div>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  padding: ${props => props.theme.spacing.section};
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const AboutHeading = styled.div`
  position: relative;
  
  span {
    display: inline-block;
    background-color: #222;
    color: white;
    padding: 5px 15px;
    border-radius: 50px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 50px;
    line-height: 1.1;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 36px;
    }
  }
`;

const AboutContent = styled.div`
  font-size: 16px;
  
  p {
    margin-bottom: 20px;
    line-height: 1.6;
    color: ${props => props.theme.colors.gray};
  }
  
  strong {
    color: ${props => props.theme.colors.white};
  }
`;

export default About;
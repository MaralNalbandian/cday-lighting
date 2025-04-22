import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Button from '../ui/Button';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    const heroElement = heroRef.current;
    const textElement = textRef.current;
    
    // Animation for hero section elements
    gsap.fromTo(
      textElement.querySelectorAll('h1, p, .buttons'),
      { 
        y: 50, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 1, 
        ease: 'power3.out' 
      }
    );
  }, []);
  
  return (
    <HeroWrapper ref={heroRef}>
      <div className="container">
        <HeroContent ref={textRef}>
          <h1>Your trusted partner for quality lighting</h1>
          <p>
            "Delivering innovative, tailored lighting solutions for projects across 
            Australia — from concept to completion.
          </p>
          <div className="buttons">
            <SeeMoreButton to="/services">
              See more
              <ButtonIcon>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </ButtonIcon>
            </SeeMoreButton>
          </div>
        </HeroContent>
      </div>
      
      <HeroImage>
        <img src="/images/CDAYLightingHero.jpg" alt="Modern kitchen with quality lighting" />
      </HeroImage>
      
      <HeroReview>
        <Stars>★ ★ ★ ★ ★</Stars>
        <ReviewText>
          C Day Lighting delivered smart, high-quality lighting solutions that elevated our entire project.
        </ReviewText>
      </HeroReview>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #111;
  padding-top: 0;
  padding-bottom: 0;
  color: white;
  
  .container {
    position: relative;
    z-index: 5;
  }
`;

const HeroContent = styled.div`
  width: 40%;
  
  h1 {
    font-size: 60px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 20px;
    color: white;
  }
  
  p {
    font-size: 18px;
    max-width: 600px;
    margin-bottom: 30px;
    color: white;
  }
  
  .buttons {
    display: flex;
    gap: 20px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 60%;
    
    h1 {
      font-size: 48px;
    }
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 100%;
    
    h1 {
      font-size: 36px;
    }
    
    p {
      font-size: 16px;
    }
  }
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  z-index: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    opacity: 0.3;
    width: 100%;
  }
`;

const SeeMoreButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 500;
  background-color: #222;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #333;
  }
`;

const ButtonIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  color: #000;
`;

const HeroReview = styled.div`
  position: absolute;
  bottom: 40px;
  right: 40px;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 10px;
  max-width: 350px;
  z-index: 5;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    right: 20px;
    bottom: 20px;
    max-width: 250px;
  }
`;

const Stars = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 20px;
  margin-bottom: 10px;
`;

const ReviewText = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: white;
`;

export default Hero;
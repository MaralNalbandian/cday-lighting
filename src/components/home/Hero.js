import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import Logo from '../ui/Logo';
// import Button from '../ui/Button';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  
  useEffect(() => {
    const textElement = textRef.current;
    gsap.fromTo(
      textElement.querySelectorAll('h1, p, .buttons'),
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: 'power3.out' }
    );
  }, []);
  
  return (
    <HeroWrapper ref={heroRef}>
      {/* TOP ROW: Logo and NavOverlay */}
      <HeroTop>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <ul>
            <li><NavLink href="#about-section">About</NavLink></li>
            <li><NavLink href="#services-section">Services</NavLink></li>
            <li><NavLink href="#projects-section">Projects</NavLink></li>
            <li><NavLink href="#contact-section">Contact</NavLink></li>
          </ul>
        </Nav>
      </HeroTop>

      <div className="container">
        <HeroContent ref={textRef}>
          <h1>Your trusted partner for quality lighting</h1>
          <p>
            Delivering innovative, tailored lighting solutions for projects across 
            Australia — from concept to completion.
          </p>
          <div className="buttons">
            <SeeMoreButton href="/services">
              See more
              <ButtonIcon>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
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

// ====== Styled Components ======
const HeroWrapper = styled.section`
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-color: #111216;
  color: white;
  .container {
    position: relative;
    z-index: 5;
  }
`;

const HeroTop = styled.div`
  position: absolute;
  top: 0; left: 0; right: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 42px 58px 0 58px;
  z-index: 10;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 22px 14px 0 14px;
  }
`;

const LogoWrapper = styled.div`
  width: 108px;
  height: 56px;
  display: flex;
  align-items: center;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 38px;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  li { margin: 0; }
`;

const NavLink = styled.a`
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.25s;
  position: relative;
  padding-bottom: 3px;
  letter-spacing: -0.01em;
  &:hover,
  &:focus {
    color: #FFC75F;
  }
  &:after {
    content: '';
    display: block;
    margin: 0 auto;
    height: 2px;
    width: 0;
    background: #FFC75F;
    transition: width .3s;
  }
  &:hover:after { width: 100%; }
`;

const HeroContent = styled.div`
  width: 40%;
  margin-top: 130px;

  h1 {
    font-size: 54px;
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 18px;
    color: white;
    letter-spacing: -0.01em;
  }
  
  p {
    font-size: 22px;
    max-width: 600px;
    margin-bottom: 30px;
    color: white;
    opacity: 0.89;
    font-weight: 400;
  }

  .buttons {
    display: flex;
    gap: 20px;
  }

  @media (max-width: 1200px) {
    width: 60%;
    h1 { font-size: 41px; }
  }
  @media (max-width: 900px) {
    width: 100%;
    margin-top: 90px;
    h1 { font-size: 31px; }
    p { font-size: 17px; }
    .buttons { gap: 12px; }
  }
`;

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 52%;
  height: 100%;
  z-index: 1;
  
  img {
    width: 100%;
    height: 100%;
    padding: 36px;
    object-fit: cover;
    border-radius: 18px;
    transition: all 0.3s ease;
  }
  @media (max-width: 900px) {
    opacity: 0.3;
    width: 100%;
    padding: 0;
    img { padding: 12px; border-radius: 12px; }
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
  background-color: #232435;
  color: white;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease;
  &:hover { background-color: #333; }
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
  bottom: 48px;
  right: 60px;
  background-color: rgba(0, 0, 0, 0.67);
  backdrop-filter: blur(10px);
  padding: 26px 26px 20px 26px;
  border-radius: 15px;
  max-width: 320px;
  z-index: 5;
  opacity: 0.95;
  @media (max-width: 900px) {
    right: 17px;
    bottom: 18px;
    max-width: 90vw;
    padding: 17px 7px 11px 14px;
    border-radius: 10px;
  }
`;

const Stars = styled.div`
  color: #fff;
  font-size: 19px;
  margin-bottom: 7px;
`;

const ReviewText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: white;
  opacity: 0.97;
`;

export default Hero;
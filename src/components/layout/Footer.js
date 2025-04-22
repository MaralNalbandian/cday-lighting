import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterTop>
          <FooterLogo>
            <Logo />
          </FooterLogo>
          
          <FooterLinks>
            <h4>Quick links</h4>
            <FooterLinksColumns>
              <FooterLinksColumn>
                <FooterLink to="/about">About us</FooterLink>
                <FooterLink to="/our-work">Our work</FooterLink>
                <FooterLink to="/services">Services</FooterLink>
              </FooterLinksColumn>
              <FooterLinksColumn>
                <FooterLink to="/testimonials">Testimonials</FooterLink>
                <FooterLink to="/faqs">FAQs</FooterLink>
                <FooterLink to="/contact">Contact</FooterLink>
              </FooterLinksColumn>
            </FooterLinksColumns>
          </FooterLinks>
        </FooterTop>
        
        <FooterDivider />
        
        <FooterBottom>
          <FooterCopyright>&copy; 2025. All rights reserved.</FooterCopyright>
          <FooterCredits>Design by Elite Digital & Consulting</FooterCredits>
        </FooterBottom>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #000;
  padding: 80px 0 40px;
  color: white;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const FooterLogo = styled.div`
  width: 150px;
`;

const FooterLinks = styled.div`
  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 24px;
  }
`;

const FooterLinksColumns = styled.div`
  display: flex;
  gap: 80px;
  
  @media (max-width: 576px) {
    gap: 40px;
  }
`;

const FooterLinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FooterLink = styled(Link)`
  color: #a0a0a0;
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: white;
  }
`;

const FooterDivider = styled.div`
  height: 1px;
  background-color: #333;
  margin-bottom: 30px;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const FooterCopyright = styled.p`
  color: #a0a0a0;
  font-size: 14px;
`;

const FooterCredits = styled.p`
  color: #a0a0a0;
  font-size: 14px;
`;

export default Footer;
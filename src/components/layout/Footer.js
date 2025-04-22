import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterContent>
          <FooterLogo>
            <Logo />
          </FooterLogo>
          
          <FooterContact>
            <ContactItem>
              <label>Office</label>
              <span>44 Carlingford Street, Regents Park NSW 2143</span>
            </ContactItem>
            
            <ContactItem>
              <label>Email</label>
              <a href="mailto:info@cdaylighting.com.au">info@cdaylighting.com.au</a>
            </ContactItem>
            
            <ContactItem>
              <label>Telephone</label>
              <a href="tel:1300000CDAY">1300 00C DAY</a>
            </ContactItem>
          </FooterContact>
          
          <FooterSocial>
            <h4>Follow us</h4>
            <SocialLinks>
              <a href="https://instagram.com/cdaylighting" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </SocialLinks>
          </FooterSocial>
          
          <FooterLinks>
            <h4>Quick links</h4>
            <ul>
              <li><Link to="/about">About us</Link></li>
              <li><Link to="/our-work">Our work</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
            </ul>
          </FooterLinks>
        </FooterContent>
        
        <FooterBottom>
          <p>&copy; 2025. All rights reserved.</p>
          <p>Design by Elite Digital & Consulting</p>
        </FooterBottom>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  background-color: #000;
  padding: 80px 0 40px;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FooterLogo = styled.div`
  width: 150px;
`;

const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    font-weight: 600;
    margin-bottom: 5px;
  }
  
  span, a {
    color: ${props => props.theme.colors.gray};
    transition: color 0.3s ease;
  }
  
  a:hover {
    color: ${props => props.theme.colors.white};
  }
`;

const FooterSocial = styled.div`
  h4 {
    margin-bottom: 20px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.darkGray};
    transition: background-color 0.3s ease;
    
    i {
      font-size: 20px;
    }
    
    &:hover {
      background-color: ${props => props.theme.colors.primary};
    }
  }
`;

const FooterLinks = styled.div`
  h4 {
    margin-bottom: 20px;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    li a {
      color: ${props => props.theme.colors.gray};
      transition: color 0.3s ease;
      
      &:hover {
        color: ${props => props.theme.colors.white};
      }
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  border-top: 1px solid ${props => props.theme.colors.darkGray};
  
  p {
    font-size: 14px;
    color: ${props => props.theme.colors.gray};
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

export default Footer;
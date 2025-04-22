import React from 'react';
import styled from 'styled-components';
import Button from '../ui/Button';

const ContactCTA = () => {
  return (
    <CTAWrapper>
      <div className="container">
        <CTAContent>
          <h2>Ready to transform your space with exceptional lighting?</h2>
          <p>Book your free 30-minute consultation with our lighting specialists today.</p>
          <Button 
            to="/contact" 
            variant="primary" 
            icon="arrow-right"
          >
            Get in touch
          </Button>
        </CTAContent>
      </div>
    </CTAWrapper>
  );
};

const CTAWrapper = styled.section`
  padding: ${props => props.theme.spacing.section};
  background-color: ${props => props.theme.colors.background};
`;

const CTAContent = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  p {
    font-size: 18px;
    color: ${props => props.theme.colors.gray};
    margin-bottom: 30px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    h2 {
      font-size: 28px;
    }
    
    p {
      font-size: 16px;
    }
  }
`;

export default ContactCTA;
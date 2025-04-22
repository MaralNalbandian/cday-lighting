import React from 'react';
import styled from 'styled-components';

const ConsultationBanner = () => {
  return (
    <BannerWrapper>
      <h3>30 min FREE consultation</h3>
      <GetItButton onClick={() => window.location.href = '/contact'}>
        Get it now
        <ArrowIcon>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </ArrowIcon>
      </GetItButton>
    </BannerWrapper>
  );
};

const BannerWrapper = styled.div`
  background-color: #000000;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  
  h3 {
    font-weight: 500;
    font-size: 18px;
    color: white;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 10px;
    padding: 15px;
    
    h3 {
      font-size: 16px;
    }
  }
`;

const GetItButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: #222;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #333;
  }
`;

const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: white;
  color: #000;
`;

export default ConsultationBanner;
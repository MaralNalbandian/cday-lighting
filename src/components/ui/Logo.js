import React from 'react';
import styled from 'styled-components';
import logoImg from '../../cDay-logo_icon.png'; 

const Logo = () => {
  return (
    <LogoImg src={logoImg} alt="Company Logo" />
  );
};

const LogoImg = styled.img`
  width: 120px;    // Adjust as needed
  height: auto;
  display: block;
`;

export default Logo;
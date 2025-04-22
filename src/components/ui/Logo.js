import React from 'react';
import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoSVG viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="4" />
      <path d="M30 50 A 20 20 0 1 1 70 50" fill="#F57C40" />
      <line x1="80" y1="45" x2="80" y2="55" stroke="#F57C40" strokeWidth="4" />
      <line x1="88" y1="40" x2="88" y2="60" stroke="#F57C40" strokeWidth="4" />
    </LogoSVG>
  );
};

const LogoSVG = styled.svg`
  width: 100%;
  height: auto;
`;

export default Logo;
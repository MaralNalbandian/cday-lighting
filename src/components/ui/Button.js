import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  icon, 
  to, 
  onClick,
  ...props 
}) => {
  // If a "to" prop is provided, render as a Link
  if (to) {
    return (
      <StyledLink to={to} variant={variant} {...props}>
        {children}
        {icon && <IconWrapper><i className={`fa fa-${icon}`}></i></IconWrapper>}
      </StyledLink>
    );
  }
  
  // Otherwise render as a button
  return (
    <StyledButton variant={variant} onClick={onClick} {...props}>
      {children}
      {icon && <IconWrapper><i className={`fa fa-${icon}`}></i></IconWrapper>}
    </StyledButton>
  );
};

const buttonStyles = `
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
`;

const StyledButton = styled.button`
  ${buttonStyles}
  background-color: ${props => 
    props.variant === 'primary' ? props.theme.colors.secondary : 
    props.variant === 'outline' ? 'transparent' : 
    props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: ${props => props.variant === 'outline' ? `2px solid ${props.theme.colors.white}` : 'none'};
  
  &:hover {
    background-color: ${props => 
      props.variant === 'primary' ? props.theme.colors.darkGray : 
      props.variant === 'outline' ? 'rgba(255, 255, 255, 0.1)' : 
      props.theme.colors.primary};
  }
`;

const StyledLink = styled(Link)`
  ${buttonStyles}
  background-color: ${props => 
    props.variant === 'primary' ? props.theme.colors.secondary : 
    props.variant === 'outline' ? 'transparent' : 
    props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
  border: ${props => props.variant === 'outline' ? `2px solid ${props.theme.colors.white}` : 'none'};
  
  &:hover {
    background-color: ${props => 
      props.variant === 'primary' ? props.theme.colors.darkGray : 
      props.variant === 'outline' ? 'rgba(255, 255, 255, 0.1)' : 
      props.theme.colors.primary};
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: white;
  color: ${props => props.theme.colors.background};
`;

export default Button;
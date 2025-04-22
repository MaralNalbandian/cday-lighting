import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }

  html, body {
    scroll-behavior: smooth;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    overflow-x: hidden;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 20px;
  }

  section {
    padding: 60px 0;
    position: relative;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${props => props.theme.colors.black};
    font-weight: 700;
  }
  
  h1 {
    font-size: 60px;
    line-height: 1.1;
  }
  
  h2 {
    font-size: 50px;
    line-height: 1.2;
  }
  
  h3 {
    font-size: 32px;
    line-height: 1.3;
  }
  
  p {
    color: ${props => props.theme.colors.lightText};
    font-size: 16px;
    line-height: 1.6;
  }
  
  button {
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
`;

export default GlobalStyle;
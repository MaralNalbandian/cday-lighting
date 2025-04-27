import { createGlobalStyle } from 'styled-components';

// A simple global style component that adds basic smooth scrolling
// without any complex JavaScript that might cause shakiness
const SimpleScrollFix = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  
  body {
    /* This ensures scrolling is handled by the browser's native implementation */
    overflow-y: auto;
    overflow-x: hidden;
  }
`;

export default SimpleScrollFix;
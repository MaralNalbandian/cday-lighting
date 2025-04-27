import { useEffect } from 'react';

/**
 * Component that adds smooth scrolling with custom easing to the entire page
 * Call this component once at the top level of your app
 */
const SmoothScroll = () => {
  useEffect(() => {
    // Save the original scroll behavior to restore on unmount
    const originalStyle = window.getComputedStyle(document.documentElement).scrollBehavior;
    
    // Apply smooth scrolling with custom properties
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add custom scroll damping with JavaScript for heavier feel
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let rafId = null;
    let isScrolling = false;
    
    const handleScroll = () => {
      isScrolling = true;
      
      if (!rafId) {
        rafId = window.requestAnimationFrame(() => {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const delta = scrollTop - lastScrollTop;
          
          // Only apply damping if it's a user-initiated scroll (not programmatic)
          if (Math.abs(delta) > 1) {
            // Apply subtle resistance/heaviness to scrolling
            const damping = 0.92; // Higher = heavier/slower (0.8-0.95 is a good range)
            const dampedPosition = lastScrollTop + (delta * damping);
            
            // Apply the damped scroll position
            window.scrollTo(0, dampedPosition);
          }
          
          lastScrollTop = scrollTop;
          rafId = null;
          
          if (isScrolling) {
            handleScroll();
          }
        });
      }
    };
    
    const handleScrollEnd = () => {
      isScrolling = false;
    };
    
    // Add scroll event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('scrollend', handleScrollEnd, { passive: true });
    
    // Apply custom scrollbar styling
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      html {
        scroll-padding-top: 80px; /* Adjust based on your header height */
      }
      
      body {
        overflow-y: scroll;
      }
      
      /* Custom scrollbar styling */
      ::-webkit-scrollbar {
        width: 10px;
      }
      
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0.05);
      }
      
      ::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 5px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(0, 0, 0, 0.3);
      }
    `;
    document.head.appendChild(styleElement);
    
    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scrollend', handleScrollEnd);
      document.documentElement.style.scrollBehavior = originalStyle;
      if (styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);
  
  // This component doesn't render anything
  return null;
};

export default SmoothScroll;
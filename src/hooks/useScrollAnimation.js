import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hook for implementing scroll-based animations
 * @param {Object} options - Animation options
 * @param {React.RefObject} options.target - Reference to the target element
 * @param {Object} options.animation - GSAP animation properties
 * @param {Object} options.trigger - ScrollTrigger configuration
 */
const useScrollAnimation = ({ target, animation, trigger = {} }) => {
  useEffect(() => {
    if (!target.current) return;
    
    const element = target.current;
    
    // Create the animation with ScrollTrigger
    const tween = gsap.to(element, {
      ...animation,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        toggleActions: 'play none none reverse',
        ...trigger
      }
    });
    
    // Clean up
    return () => {
      tween.kill();
      if (tween.scrollTrigger) {
        tween.scrollTrigger.kill();
      }
    };
  }, [target, animation, trigger]);
};

export default useScrollAnimation;
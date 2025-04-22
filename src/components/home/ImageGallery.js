import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

const ImageGallery = () => {
  const galleryRef = useRef(null);
  const imagesRef = useRef(null);
  
  const images = [
    { id: 1, src: '/images/project1.jpg', alt: 'Modern home with custom lighting' },
    { id: 2, src: '/images/project2.jpg', alt: 'High-rise apartment lighting' },
    { id: 3, src: '/images/project3.jpg', alt: 'Elegant hallway lighting' },
    { id: 4, src: '/images/project4.jpg', alt: 'Office interior lighting' },
    // { id: 5, src: '/images/project5.jpg', alt: 'Residential kitchen lighting' },
    // { id: 6, src: '/images/project6.jpg', alt: 'Commercial space lighting' },
    // Duplicate the first few images to create a seamless loop effect
    { id: 7, src: '/images/project1.jpg', alt: 'Modern home with custom lighting' },
    { id: 8, src: '/images/project2.jpg', alt: 'High-rise apartment lighting' },
    { id: 9, src: '/images/project3.jpg', alt: 'Elegant hallway lighting' },
  ];
  
  useEffect(() => {
    const gallery = galleryRef.current;
    const imagesContainer = imagesRef.current;
    
    if (!gallery || !imagesContainer) return;
    
    // Calculate the width of a single gallery item plus its gap
    const itemWidth = imagesContainer.querySelector('.gallery-item').offsetWidth + 20; // 20px is the gap
    
    // Calculate the width needed to scroll before resetting
    const scrollDistance = itemWidth * (images.length - 3); // Subtract the duplicated images
    
    // Create the continuous scrolling animation
    const autoScroll = gsap.to(imagesContainer, {
      x: -scrollDistance,
      duration: 30, // Adjust for faster/slower scrolling
      ease: "none",
      repeat: -1, // Infinite repetition
      repeatDelay: 0,
      onRepeat: () => {
        // When animation repeats, immediately reset to start position
        gsap.set(imagesContainer, { x: 0 });
      }
    });
    
    // Pause animation when the gallery is not in view
    const handleVisibility = () => {
      const rect = gallery.getBoundingClientRect();
      const isVisible = 
        rect.top < window.innerHeight && 
        rect.bottom > 0;
      
      if (isVisible) {
        autoScroll.play();
      } else {
        autoScroll.pause();
      }
    };
    
    // Add event listeners for scroll and visibility change
    window.addEventListener('scroll', handleVisibility);
    window.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        autoScroll.pause();
      } else {
        handleVisibility();
      }
    });
    
    // Check initial visibility
    handleVisibility();
    
    // Clean up
    return () => {
      autoScroll.kill();
      window.removeEventListener('scroll', handleVisibility);
      window.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [images.length]);
  
  return (
    <GalleryWrapper ref={galleryRef}>
      <GalleryInner ref={imagesRef}>
        {images.map(image => (
          <GalleryItem key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </GalleryItem>
        ))}
      </GalleryInner>
    </GalleryWrapper>
  );
};

const GalleryWrapper = styled.section`
  padding: 0;
  position: relative;
  height: 500px;
  overflow: hidden;
  background-color: ${props => props.theme.colors.background};
`;

const GalleryInner = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  width: max-content;
  height: 100%;
`;

const GalleryItem = styled.div`
  width: 400px;
  height: 100%;
  overflow: hidden;
  border-radius: 0; /* Removed border radius */
  box-shadow: none; /* Removed shadow */
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    width: 350px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    width: 300px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 250px;
  }
`;

export default ImageGallery;
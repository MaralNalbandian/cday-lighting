import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StickyConsultationBanner = () => {
  const [isSticky, setIsSticky] = useState(false);
  const bannerRef = useRef(null);
  const placeholderRef = useRef(null);

  useEffect(() => {
    const banner = bannerRef.current;
    const placeholder = placeholderRef.current;
    const header = document.querySelector('header');
    if (!banner || !placeholder) return;

    // When sticky, the placeholder needs to have the same height as the banner to prevent layout jump
    const setPlaceholderHeight = () => {
      if (isSticky) {
        placeholder.style.height = `${banner.offsetHeight}px`;
        placeholder.style.display = 'block';
      } else {
        placeholder.style.height = '0px';
        placeholder.style.display = 'none';
      }
    };

    const handleScroll = () => {
      if (!header || !banner) return;
      const headerRect = header.getBoundingClientRect();
      const bannerRect = banner.getBoundingClientRect();

      // If the header bottom is below or touching the banner top, activate sticky
      if (headerRect.bottom >= bannerRect.top && !isSticky) {
        setIsSticky(true);
      } else if (headerRect.bottom < placeholder.getBoundingClientRect().top && isSticky) {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    setPlaceholderHeight(); // On mount

    // When isSticky changes, update placeholder
    setPlaceholderHeight();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
    // Only rerun effect if isSticky changes.
    // eslint-disable-next-line
  }, [isSticky]);

  // Always update header height for 'top'
  let headerHeight = 0;
  if (typeof window !== "undefined") {
    const header = document.querySelector('header');
    headerHeight = header ? header.offsetHeight : 80;
  }

  return (
    <>
      <div ref={placeholderRef} style={{ height: 0, display: 'none', width: '100%' }} />
      <BannerWrapper
        ref={bannerRef}
        $isSticky={isSticky}
        $headerHeight={headerHeight}
      >
        <div className="banner-content">
          <h3>30 min FREE consultation</h3>
          <GetItButton onClick={() => window.location.href = '/contact'}>
            Get it now
            <ArrowIcon>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </ArrowIcon>
          </GetItButton>
        </div>
      </BannerWrapper>
    </>
  );
};

// Styles - mostly the same
const BannerWrapper = styled.div`
  background-color: #000000;
  width: 100%;
  height: 100px;
  z-index: 998;
  margin-top: -1px;
  position: ${props => props.$isSticky ? 'fixed' : 'relative'};
  top: ${props => props.$isSticky ? `${props.$headerHeight}px` : 'auto'};
  left: 0;
  transition: all 0.2s ease;
  .banner-content {
    padding: 15px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  h3 {
    font-weight: 500;
    font-size: 18px;
    color: white;
    margin: 0;
  }
  @media (max-width: 768px) {
    .banner-content {
      flex-direction: column;
      gap: 10px;
      padding: 15px;
    }
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

export default StickyConsultationBanner;
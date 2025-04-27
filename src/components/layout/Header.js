// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import styled from 'styled-components';
// import Logo from '../ui/Logo';

// const Header = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToSection = (sectionId) => {
//     if (!isHomePage) {
//       // If not on home page, navigate to home and then scroll
//       window.location.href = `/#${sectionId}`;
//       return;
//     }
    
//     // If on home page, smooth scroll to section
//     const element = document.getElementById(sectionId);
//     if (element) {
//       // Scroll with offset for header height
//       const headerOffset = 80;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
      
//       // Close mobile menu after clicking
//       setMobileMenuOpen(false);
//     }
//   };

//   return (
//     <HeaderWrapper scrolled={scrolled}>
//       <div className="container">
//         <HeaderContainer>
//           <LogoWrapper>
//             <Link to="/">
//               <Logo />
//             </Link>
//           </LogoWrapper>
          
//           <NavDesktop>
//             <ul>
//               <li>
//                 <NavLink onClick={() => scrollToSection('about-section')}>
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink onClick={() => scrollToSection('services-section')}>
//                   Services
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink onClick={() => scrollToSection('projects-section')}>
//                   Projects
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink onClick={() => scrollToSection('contact-section')}>
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </NavDesktop>
          
//           <MobileToggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             {mobileMenuOpen ? '✕' : '☰'}
//           </MobileToggle>
          
//           <NavMobile isOpen={mobileMenuOpen}>
//             <ul>
//               <li>
//                 <NavLink onClick={() => scrollToSection('about-section')}>
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink onClick={() => scrollToSection('services-section')}>
//                   Services
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink onClick={() => scrollToSection('projects-section')}>
//                   Projects
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink onClick={() => scrollToSection('contact-section')}>
//                   Contact
//                 </NavLink>
//               </li>
//             </ul>
//           </NavMobile>
//         </HeaderContainer>
//       </div>
//     </HeaderWrapper>
//   );
// };

// const HeaderWrapper = styled.header`
//   width: 100%;
//   padding: 20px 0;
//   background-color: #000;
//   /*background-color: ${props => props.scrolled ? 'rgba(17, 17, 17, 0.95)' : 'transparent'};*/
//   transition: ${props => props.theme.transitions.default};
// `

// const HeaderContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
// `;

// const LogoWrapper = styled.div`
//   width: 100px;
//   height: auto;
// `;

// const NavDesktop = styled.nav`
//   display: flex;
  
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     display: none;
//   }
  
//   ul {
//     display: flex;
//     gap: 40px;
//   }
// `;

// const NavLink = styled.a`
//   font-weight: 500;
//   position: relative;
//   padding-bottom: 5px;
//   cursor: pointer;
//   color: #fff;   
  
//   &:after {
//     content: '';
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     width: 0;
//     height: 2px;
//     background-color: ${props => props.theme.colors.primary};
//     transition: width 0.3s ease;
//   }
  
//   &:hover:after {
//     width: 100%;
//   }
// `;

// const MobileToggle = styled.button`
//   display: none;
//   font-size: 24px;
//   background: none;
//   border: none;
//   color: white;
//   cursor: pointer;
  
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     display: block;
//   }
// `;

// const NavMobile = styled.nav`
//   position: fixed;
//   top: 80px;
//   right: ${props => props.isOpen ? '0' : '-100%'};
//   width: 100%;
//   height: calc(100vh - 80px);
//   background-color: ${props => props.theme.colors.background};
//   transition: ${props => props.theme.transitions.default};
//   z-index: 999;
  
//   ul {
//     display: flex;
//     flex-direction: column;
//     padding: 40px;
    
//     li {
//       margin-bottom: 20px;
      
//       a {
//         font-size: 24px;
//         font-weight: 500;
//         color: #fff;  
//       }
//     }
//   }
// `;

// export default Header;
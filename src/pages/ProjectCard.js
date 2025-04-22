// import React, { useRef } from 'react';
// import styled from 'styled-components';

// const ProjectCard = ({ project, index }) => {
//   const cardRef = useRef(null);
//   const isDark = index % 2 !== 0; // odd cards are dark, even cards are light
  
//   return (
//     <CardWrapper 
//       ref={cardRef} 
//       className="project-card"
//       $isDark={isDark}
//       $index={index}
//       $zIndex={100 - index} // Higher index cards have lower z-index
//     >
//       <CardInner>
//         <CardImage $isDark={isDark}>
//           <img src={project.image} alt={project.title} />
//         </CardImage>
        
//         <CardContent $isDark={isDark}>
//           <h2>{project.title}</h2>
//           <p>{project.description}</p>
          
//           {project.tags && (
//             <TagContainer>
//               {project.tags.map((tag, i) => (
//                 <Tag key={i} $isDark={isDark}>{tag}</Tag>
//               ))}
//             </TagContainer>
//           )}
          
//           {project.testimonial && (
//             <Testimonial $isDark={isDark}>
//               <Quote>"</Quote>
//               <p>{project.testimonial.text}</p>
//               {project.testimonial.logo && (
//                 <ClientLogo>
//                   <img src={project.testimonial.logo} alt="Client logo" />
//                 </ClientLogo>
//               )}
//             </Testimonial>
//           )}
//         </CardContent>
//       </CardInner>
//     </CardWrapper>
//   );
// };

// // The main wrapper that will be positioned absolutely in the parent container
// const CardWrapper = styled.div`
//   position: absolute;
//   top: ${props => props.$index * 20}px; // Each card is offset from the top slightly
//   left: 0;
//   right: 0;
//   width: 100%;
//   z-index: ${props => props.$zIndex};
//   transition: transform 0.5s ease-out; // Smooth transition for scroll animations
//   transform: translateY(${props => props.$index * 10}px); // Initial offset
  
//   &.active {
//     transform: translateY(0);
//   }
// `;

// // Inner container for the card content
// const CardInner = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   background-color: white;
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//   margin: 0 auto;
//   max-width: 1200px;
  
//   @media (max-width: 768px) {
//     grid-template-columns: 1fr;
//   }
// `;

// const CardImage = styled.div`
//   width: 100%;
//   height: 100%;
//   min-height: 400px;
//   background-color: ${props => props.$isDark ? '#111' : '#f5f5f5'};
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     display: block;
//   }
  
//   @media (max-width: 768px) {
//     min-height: 300px;
//   }
// `;

// const CardContent = styled.div`
//   padding: 40px;
//   background-color: ${props => props.$isDark ? '#111' : '#f5f5f5'};
//   color: ${props => props.$isDark ? 'white' : 'black'};
  
//   h2 {
//     font-size: 32px;
//     font-weight: 700;
//     margin-bottom: 20px;
//   }
  
//   p {
//     line-height: 1.6;
//     margin-bottom: 20px;
//     color: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.8)' : '#666'};
//   }
// `;

// const TagContainer = styled.div`
//   display: flex;
//   gap: 10px;
//   margin-bottom: 20px;
//   flex-wrap: wrap;
// `;

// const Tag = styled.span`
//   background-color: ${props => props.$isDark ? '#333' : 'black'};
//   color: ${props => props.$isDark ? 'white' : 'white'};
//   padding: 5px 15px;
//   border-radius: 50px;
//   font-size: 14px;
//   font-weight: 500;
// `;

// const Testimonial = styled.div`
//   position: relative;
//   padding: 20px 0;
//   border-top: 1px solid ${props => props.$isDark ? '#333' : '#ddd'};
//   margin-top: 20px;
  
//   p {
//     font-style: italic;
//     padding-left: 20px;
//     margin-bottom: 15px;
//   }
// `;

// const Quote = styled.span`
//   position: absolute;
//   top: 10px;
//   left: -10px;
//   font-size: 40px;
//   opacity: 0.5;
// `;

// const ClientLogo = styled.div`
//   width: 80px;
//   height: 40px;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: contain;
//   }
// `;

// export default ProjectCard;
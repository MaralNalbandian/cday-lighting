// import React from 'react';
// import styled from 'styled-components';

// const FramerCard = ({ 
//   title, 
//   description, 
//   image, 
//   tags, 
//   testimonial, 
//   isDark = false 
// }) => {
//   return (
//     <CardInner $isDark={isDark}>
//       <CardImage>
//         <img src={image || `/api/placeholder/600/500`} alt={title} />
//       </CardImage>
      
//       <CardContent $isDark={isDark}>
//         <h2>{title}</h2>
//         <p>{description}</p>
        
//         {tags && tags.length > 0 && (
//           <TagContainer>
//             {tags.map((tag, i) => (
//               <Tag key={i} $isDark={isDark}>{tag}</Tag>
//             ))}
//           </TagContainer>
//         )}
        
//         {testimonial && (
//           <Testimonial $isDark={isDark}>
//             <Quote $isDark={isDark}>"</Quote>
//             <p>{testimonial.text}</p>
//             {testimonial.logo && (
//               <ClientLogo>
//                 <img 
//                   src={testimonial.logo} 
//                   alt="Client logo" 
//                   className={isDark ? "invert" : ""} 
//                 />
//               </ClientLogo>
//             )}
//           </Testimonial>
//         )}
//       </CardContent>
//     </CardInner>
//   );
// };

// // Inner container for the card content
// const CardInner = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   background-color: ${props => props.$isDark ? '#111' : '#f5f5f5'};
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
//   min-height: 450px;
  
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
//   color: white;
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
//   color: ${props => props.$isDark ? 'white' : 'black'};
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

// export default FramerCard;
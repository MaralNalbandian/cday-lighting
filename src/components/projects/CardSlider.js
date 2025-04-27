// import React, { useEffect, useRef } from 'react';
// import styled from 'styled-components';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// // Register ScrollTrigger
// gsap.registerPlugin(ScrollTrigger);

// const CardSlider = () => {
//   const containerRef = useRef(null);
//   const cardsRef = useRef([]);
  
//   // Project data
//   const projects = [
//     {
//       id: 1,
//       title: 'Modern kitchen lighting',
//       description: 'Lighting played a pivotal role in transforming this kitchen into a functional and visually striking space. We designed and installed a custom lighting solution that layered ambient, task, and accent lighting to enhance both usability and mood. From under-cabinet LEDs that brighten work surfaces to statement pendant lights that anchor the island, every fixture was carefully selected to complement the kitchen\'s modern aesthetic. The result is a beautifully lit environment that elevates everyday living and entertaining.',
//       image: '/images/kitchen.jpg',
//       tags: ['Kitchen', '4 weeks'],
//       testimonial: {
//         text: 'The custom lighting CDAY designed completely transformed our kitchen — it\'s not only beautiful but also incredibly functional. From the ambient glow to the focused task lighting, every detail was thoughtfully done. CDAY Lighting truly brought our vision to life.',
//         logo: '/images/tqm-logo.png'
//       }
//     },
//     {
//       id: 2,
//       title: 'Architectural entranceway',
//       description: 'Our team designed and built a striking vertical LED lighting which adds a bold architectural element to this entranceway, creating a warm and welcoming ambiance. The sleek lines and soft glow not only enhance visibility but also elevate the overall aesthetic, making a powerful first impression.',
//       image: '/images/entranceway.jpg',
//       tags: ['External Works', '1 month'],
//       testimonial: {
//         text: 'The vertical LED lighting has given our entrance a sleek, modern vibe that immediately grabs attention. It creates a warm, welcoming atmosphere, and guests always remark on it. CDAY Lighting brought our vision to life perfectly.',
//         logo: '/images/deicorp-logo.png'
//       }
//     },
//     {
//       id: 3,
//       title: 'High-rise apartments',
//       description: 'We revitalized this high-rise apartment with a fresh, modern design, focusing on sleek fixtures, high-end finishes, and strategically placed lighting. The lighting design was carefully tailored to highlight the apartment\'s best features, creating an ambiance of sophistication and warmth. The layout was optimized to maximize space, resulting in a luxurious, functional, and visually stunning living environment.',
//       image: '/images/highrise.jpg',
//       tags: ['Apartment', '6 weeks'],
//       testimonial: {
//         text: 'CDAY Lighting really stepped up our high-rise apartment with sleek, functional lighting that made the space feel brighter and more polished. Ruth, our lighting specialist, was awesome to work with — her design ideas made all the difference.',
//         logo: '/images/deicorp-logo.png'
//       }
//     }
//   ];
  
//   // Initialize refs array for each card
//   if (cardsRef.current.length !== projects.length) {
//     cardsRef.current = Array(projects.length).fill().map((_, i) => cardsRef.current[i] || React.createRef());
//   }
  
//   useEffect(() => {
//     const container = containerRef.current;
//     const cards = cardsRef.current.map(ref => ref.current);
    
//     if (!container || !cards.length) return;
    
//     const ctx = gsap.context(() => {
//       // Set initial state - hide all cards except first one
//       gsap.set(cards.slice(1), { autoAlpha: 0 });
      
//       // Calculate the scroll height needed
//       const scrollHeight = `${(projects.length) * 100}vh`;
//       gsap.set(container, { minHeight: scrollHeight });
      
//       // Create the scroll trigger for pinning
//       ScrollTrigger.create({
//         trigger: container,
//         start: "top top",
//         end: `+=${scrollHeight}`,
//         pin: ".cards-container",
//         pinSpacing: true,
//       });
      
//       // Create animations between each card
//       cards.forEach((card, index) => {
//         if (index < cards.length - 1) {
//           // Create scroll trigger for this card transition
//           ScrollTrigger.create({
//             trigger: container,
//             start: `${index * 100}vh top`,
//             end: `${(index + 1) * 100}vh top`,
//             onEnter: () => {
//               // Fade out current card
//               gsap.to(card, {
//                 autoAlpha: 0,
//                 y: -50,
//                 duration: 0.4,
//                 ease: "power2.inOut"
//               });
              
//               // Fade in next card
//               gsap.to(cards[index + 1], {
//                 autoAlpha: 1,
//                 y: 0,
//                 duration: 0.4,
//                 delay: 0.1,
//                 ease: "power2.out"
//               });
//             },
//             onLeaveBack: () => {
//               // Fade in previous card when scrolling back up
//               gsap.to(card, {
//                 autoAlpha: 1,
//                 y: 0,
//                 duration: 0.4,
//                 ease: "power2.out"
//               });
              
//               // Fade out current card
//               gsap.to(cards[index + 1], {
//                 autoAlpha: 0,
//                 y: 50,
//                 duration: 0.4,
//                 ease: "power2.in"
//               });
//             }
//           });
//         }
//       });
//     });
    
//     return () => ctx.revert(); // Clean up animations on unmount
//   }, [projects]);
  
//   return (
//     <SliderSection ref={containerRef}>
//       <div className="container">
//         <SectionHeading>
//           <SectionTag>Our work</SectionTag>
//           <h2>Get inspired by our work</h2>
//           <p>See how we've transformed homes with our expert customisation and attention to detail.</p>
//         </SectionHeading>
        
//         <CardsContainer className="cards-container">
//           {projects.map((project, index) => (
//             <Card
//               key={project.id}
//               ref={cardsRef.current[index]}
//               $isDark={index % 2 !== 0}
//               style={{ opacity: index === 0 ? 1 : 0 }}
//             >
//               <CardInner $isDark={index % 2 !== 0}>
//                 <CardImage>
//                   <img src={project.image || `/api/placeholder/600/400`} alt={project.title} />
//                 </CardImage>
//                 <CardContent $isDark={index % 2 !== 0}>
//                   <h2>{project.title}</h2>
//                   <p>{project.description}</p>
                  
//                   {project.tags && (
//                     <TagContainer>
//                       {project.tags.map((tag, i) => (
//                         <Tag key={i} $isDark={index % 2 !== 0}>{tag}</Tag>
//                       ))}
//                     </TagContainer>
//                   )}
                  
//                   {project.testimonial && (
//                     <Testimonial $isDark={index % 2 !== 0}>
//                       <Quote $isDark={index % 2 !== 0}>"</Quote>
//                       <p>{project.testimonial.text}</p>
//                       {project.testimonial.logo && (
//                         <ClientLogo>
//                           <img 
//                             src={project.testimonial.logo} 
//                             alt="Client logo" 
//                             className={index % 2 !== 0 ? "invert" : ""} 
//                           />
//                         </ClientLogo>
//                       )}
//                     </Testimonial>
//                   )}
//                 </CardContent>
//               </CardInner>
//             </Card>
//           ))}
//         </CardsContainer>
//       </div>
//     </SliderSection>
//   );
// };

// // Styled components
// const SliderSection = styled.section`
//   position: relative;
//   padding: 80px 0;
  
//   .container {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 20px;
//   }
// `;

// const SectionHeading = styled.div`
//   text-align: center;
//   margin-bottom: 60px;
  
//   h2 {
//     font-size: 48px;
//     font-weight: 700;
//     margin-bottom: 20px;
//   }
  
//   p {
//     max-width: 700px;
//     margin: 0 auto;
//     font-size: 18px;
//     color: #666;
//   }
// `;

// const SectionTag = styled.div`
//   display: inline-block;
//   background-color: #222;
//   color: white;
//   padding: 5px 15px;
//   border-radius: 50px;
//   font-size: 14px;
//   margin-bottom: 20px;
// `;

// const CardsContainer = styled.div`
//   position: relative;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Card = styled.div`
//   position: absolute;
//   width: 100%;
//   visibility: ${props => props.$index === 0 ? 'visible' : 'hidden'};
// `;

// const CardInner = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   background-color: ${props => props.$isDark ? '#111' : '#f5f5f5'};
//   border-radius: 16px;
//   overflow: hidden;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
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

// export default CardSlider;
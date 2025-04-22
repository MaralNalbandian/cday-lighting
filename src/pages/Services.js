// import React from 'react';
// import styled from 'styled-components';
// import ConsultationBanner from '../components/layout/ConsultationBanner';
// import Button from '../components/ui/Button';

// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       title: 'Lighting Design & Consultation',
//       description: 'Our expert team creates custom lighting plans tailored to your space\'s unique requirements, considering both aesthetics and functionality.',
//       image: '/images/service-design.jpg',
//       benefits: [
//         'Comprehensive lighting plans and 3D visualizations',
//         'Expert advice on fixture selection and placement',
//         'Energy efficiency recommendations',
//         'Alignment with architectural and interior design elements'
//       ]
//     },
//     {
//       id: 2,
//       title: 'Residential Lighting Solutions',
//       description: 'Transform your home with thoughtfully designed lighting that enhances both everyday living and special moments.',
//       image: '/images/service-residential.jpg',
//       benefits: [
//         'Kitchen and living space lighting',
//         'Bedroom and bathroom lighting solutions',
//         'Outdoor and landscape lighting',
//         'Smart home lighting integration'
//       ]
//     },
//     {
//       id: 3,
//       title: 'Commercial & Retail Lighting',
//       description: 'Create inviting, productive, and visually striking commercial spaces with our specialized lighting solutions.',
//       image: '/images/service-commercial.jpg',
//       benefits: [
//         'Office and workspace lighting',
//         'Retail and hospitality lighting',
//         'Energy-efficient commercial solutions',
//         'Compliance with commercial building standards'
//       ]
//     },
//     {
//       id: 4,
//       title: 'Architectural & Statement Lighting',
//       description: 'Make a bold impression with custom architectural lighting features that serve as the centerpiece of your space.',
//       image: '/images/service-architectural.jpg',
//       benefits: [
//         'Custom lighting feature design',
//         'Pendant and chandelier installation',
//         'Cove and concealed lighting',
//         'Facade and exterior architectural lighting'
//       ]
//     },
//     {
//       id: 5,
//       title: 'Smart Lighting & Automation',
//       description: 'Experience the convenience and efficiency of intelligent lighting systems that adapt to your needs and preferences.',
//       image: '/images/service-smart.jpg',
//       benefits: [
//         'Smart lighting system design and installation',
//         'Voice and app-controlled lighting',
//         'Programmable scene setting',
//         'Integration with existing home automation'
//       ]
//     },
//     {
//       id: 6,
//       title: 'Lighting Retrofits & Upgrades',
//       description: 'Modernize your existing lighting systems for improved performance, aesthetics, and energy efficiency.',
//       image: '/images/service-retrofit.jpg',
//       benefits: [
//         'LED conversion and upgrades',
//         'Energy efficiency assessment',
//         'Lighting system modernization',
//         'Cost-saving lighting solutions'
//       ]
//     }
//   ];

//   return (
//     <ServicesPageWrapper>
//       <ConsultationBanner />
      
//       <HeroSection>
//         <div className="container">
//           <h1>Our Services</h1>
//           <p>Comprehensive lighting solutions for every project</p>
//         </div>
//       </HeroSection>
      
//       <section className="services-content">
//         <div className="container">
//           <ServicesIntro>
//             <h2>What We Do</h2>
//             <p>
//               At CDAY Lighting, we offer a full spectrum of lighting services, from initial consultation and design 
//               to final installation and programming. Our expert team works closely with clients to understand their 
//               vision and requirements, delivering tailored solutions that transform spaces through the power of light.
//             </p>
//           </ServicesIntro>
          
//           <ServicesGrid>
//             {services.map((service) => (
//               <ServiceCard key={service.id}>
//                 <ServiceImage>
//                   <img src={service.image} alt={service.title} />
//                 </ServiceImage>
//                 <ServiceContent>
//                   <h3>{service.title}</h3>
//                   <p>{service.description}</p>
//                   <BenefitsList>
//                     {service.benefits.map((benefit, index) => (
//                       <BenefitItem key={index}>
//                         <BenefitIcon>✓</BenefitIcon>
//                         <span>{benefit}</span>
//                       </BenefitItem>
//                     ))}
//                   </BenefitsList>
//                 </ServiceContent>
//               </ServiceCard>
//             ))}
//           </ServicesGrid>
          
//           <ProcessSection>
//             <h2>Our Process</h2>
//             <ProcessSteps>
//               <ProcessStep>
//                 <StepNumber>01</StepNumber>
//                 <StepContent>
//                   <h3>Consultation</h3>
//                   <p>We begin with a comprehensive consultation to understand your needs, preferences, and the unique aspects of your space.</p>
//                 </StepContent>
//               </ProcessStep>
              
//               <ProcessStep>
//                 <StepNumber>02</StepNumber>
//                 <StepContent>
//                   <h3>Design</h3>
//                   <p>Our designers create a detailed lighting plan that balances aesthetics, functionality, and energy efficiency.</p>
//                 </StepContent>
//               </ProcessStep>
              
//               <ProcessStep>
//                 <StepNumber>03</StepNumber>
//                 <StepContent>
//                   <h3>Selection</h3>
//                   <p>We help you select the perfect fixtures from our curated collection of high-quality lighting products.</p>
//                 </StepContent>
//               </ProcessStep>
              
//               <ProcessStep>
//                 <StepNumber>04</StepNumber>
//                 <StepContent>
//                   <h3>Installation</h3>
//                   <p>Our skilled technicians handle the professional installation of all lighting elements with precision and care.</p>
//                 </StepContent>
//               </ProcessStep>
              
//               <ProcessStep>
//                 <StepNumber>05</StepNumber>
//                 <StepContent>
//                   <h3>Programming</h3>
//                   <p>For smart lighting systems, we program and fine-tune controls to create perfect lighting scenes for different activities.</p>
//                 </StepContent>
//               </ProcessStep>
              
//               <ProcessStep>
//                 <StepNumber>06</StepNumber>
//                 <StepContent>
//                   <h3>Follow-up</h3>
//                   <p>We ensure your complete satisfaction with ongoing support and maintenance for your lighting systems.</p>
//                 </StepContent>
//               </ProcessStep>
//             </ProcessSteps>
//           </ProcessSection>
          
//           <CTASection>
//             <h2>Ready to transform your space with exceptional lighting?</h2>
//             <p>Schedule your free 30-minute consultation with our lighting experts today.</p>
//             <Button to="/contact" variant="primary" icon="arrow-right">
//               Get in touch
//             </Button>
//           </CTASection>
//         </div>
//       </section>
//     </ServicesPageWrapper>
//   );
// };

// const ServicesPageWrapper = styled.main`
//   padding-top: 80px; // Space for fixed header
// `;

// const HeroSection = styled.section`
//   background-color: ${props => props.theme.colors.secondary};
//   padding: 100px 0;
//   text-align: center;
  
//   h1 {
//     font-size: 48px;
//     margin-bottom: 20px;
//   }
  
//   p {
//     font-size: 20px;
//     color: ${props => props.theme.colors.gray};
//     max-width: 600px;
//     margin: 0 auto;
//   }
  
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     padding: 80px 0;
    
//     h1 {
//       font-size: 36px;
//     }
    
//     p {
//       font-size: 18px;
//     }
//   }
// `;

// const ServicesIntro = styled.div`
//   text-align: center;
//   max-width: 800px;
//   margin: 80px auto;
  
//   h2 {
//     font-size: 36px;
//     margin-bottom: 20px;
//   }
  
//   p {
//     font-size: 18px;
//     line-height: 1.6;
//     color: ${props => props.theme.colors.gray};
//   }
  
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     margin: 60px auto;
    
//     h2 {
//       font-size: 28px;
//     }
    
//     p {
//       font-size: 16px;
//     }
//   }
// `;

// const ServicesGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
//   gap: 30px;
//   margin-bottom: 80px;
  
//   @media (max-width: ${props => props.theme.breakpoints.sm}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ServiceCard = styled.div`
//   background-color: ${props => props.theme.colors.secondary};
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: ${props => props.theme.shadows.card};
//   transition: transform 0.3s ease;
  
//   &:hover {
//     transform: translateY(-5px);
//   }
// `;

// const ServiceImage = styled.div`
//   width: 100%;
//   height: 200px;
//   overflow: hidden;
  
//   img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease;
//   }
  
//   ${ServiceCard}:hover & img {
//     transform: scale(1.05);
//   }
// `;

// const ServiceContent = styled.div`
//   padding: 30px;
  
//   h3 {
//     font-size: 22px;
//     margin-bottom: 15px;
//   }
  
//   p {
//     color: ${props => props.theme.colors.gray};
//     margin-bottom: 20px;
//     line-height: 1.5;
//   }
// `;

// const BenefitsList = styled.ul`
//   margin-top: 20px;
// `;

// const BenefitItem = styled.li`
//   display: flex;
//   align-items: flex-start;
//   margin-bottom: 10px;
  
//   span {
//     color: ${props => props.theme.colors.gray};
//     line-height: 1.4;
//   }
// `;

// const BenefitIcon = styled.div`
//   color: ${props => props.theme.colors.primary};
//   margin-right: 10px;
//   font-weight: bold;
// `;

// const ProcessSection = styled.div`
//   margin: 100px 0;
  
//   h2 {
//     font-size: 36px;
//     text-align: center;
//     margin-bottom: 60px;
//   }
  
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     margin: 80px 0;
    
//     h2 {
//       font-size: 28px;
//       margin-bottom: 40px;
//     }
//   }
// `;

// const ProcessSteps = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 30px;
  
//   @media (max-width: ${props => props.theme.breakpoints.lg}) {
//     grid-template-columns: repeat(2, 1fr);
//   }
  
//   @media (max-width: ${props => props.theme.breakpoints.sm}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const ProcessStep = styled.div`
//   display: flex;
//   align-items: flex-start;
//   background-color: ${props => props.theme.colors.secondary};
//   padding: 30px;
//   border-radius: 10px;
// `;

// const StepNumber = styled.div`
//   font-size: 36px;
//   font-weight: 700;
//   color: ${props => props.theme.colors.primary};
//   margin-right: 20px;
//   line-height: 1;
// `;

// const StepContent = styled.div`
//   h3 {
//     font-size: 22px;
//     margin-bottom: 10px;
//   }
  
//   p {
//     color: ${props => props.theme.colors.gray};
//     line-height: 1.5;
//   }
// `;

// const CTASection = styled.div`
//   text-align: center;
//   background-color: ${props => props.theme.colors.secondary};
//   padding: 80px;
//   border-radius: 10px;
//   margin-bottom: 80px;
  
//   h2 {
//     font-size: 36px;
//     margin-bottom: 20px;
//   }
  
//   p {
//     font-size: 18px;
//     color: ${props => props.theme.colors.gray};
//     max-width: 600px;
//     margin: 0 auto 30px;
//   }
  
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     padding: 40px 20px;
    
//     h2 {
//       font-size: 28px;
//     }
    
//     p {
//       font-size: 16px;
//     }
//   }
// `;

// export default Services;
import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowRight } from 'lucide-react'; // Assuming you're using lucide-react icons

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      id: 1,
      title: 'Assess lighting needs',
      content: 'We take the time to understand each project\'s unique requirements — from architectural plans and space functionality to mood, ambiance, and energy efficiency goals. Our team works closely with clients, builders, and designers to conduct a comprehensive lighting assessment that ensures every fixture serves a clear purpose, aligns with the overall design aesthetic, and performs optimally for the environment it\'s placed in.',
      image: 'images/assessLighting.jpg' // Replace with actual image paths
    },
    {
      id: 2,
      title: 'Cross-specify fittings',
      content: 'Our team leverages in-depth product knowledge and industry experience to recommend alternative fittings that match or exceed the original specifications — often at a more competitive price point. We ensure that any substitution maintains the intended look, feel, and performance of the design, helping clients stay within budget without compromising on quality or aesthetics.',
      image: 'images/crossspecifyFittings.jpg'
    },
    {
      id: 3,
      title: 'Customise solutions',
      content: 'Every project is different — and sometimes, off-the-shelf products aren\'t enough. That\'s why we offer fully customised lighting solutions, including bespoke fittings designed to meet unique architectural, functional, or aesthetic needs. From specialty finishes and dimensions to performance specifications and integration with smart systems, we collaborate with local and international manufacturers to bring one-of-a-kind lighting concepts to life.',
      image: '/images/customiseSolutions.jpg'
    },
  ];
  
  return (
    <ServicesWrapper>
      <div className="container">
        <ServicesHeading>
          <span>Services</span>
          <h2>What we do</h2>
          <p>Find out which one of our services fit the needs of your project</p>
        </ServicesHeading>
        
        <ServiceLayout>
          {/* Left side - Image */}
          <ImageContainer>
            {services.map((service, index) => (
              <ServiceImage 
                key={`image-${service.id}`} 
                isActive={activeService === index}
                imageUrl={service.image}
              >
                <GetInTouchButton>
                  Get in touch <ArrowRight size={16} />
                </GetInTouchButton>
              </ServiceImage>
            ))}
          </ImageContainer>
          
          {/* Right side - Services accordion */}
          <ServicesAccordion>
            {services.map((service, index) => (
              <AccordionItem 
                key={service.id} 
                isActive={activeService === index}
                onClick={() => setActiveService(index)}
              >
                <AccordionHeader>
                  <h3>{service.title}</h3>
                  <AccordionIcon isActive={activeService === index}>
                    {activeService === index ? '×' : '+'}
                  </AccordionIcon>
                </AccordionHeader>
                
                <AccordionContent isActive={activeService === index}>
                  <p>{service.content}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </ServicesAccordion>
        </ServiceLayout>
      </div>
    </ServicesWrapper>
  );
};

const ServicesWrapper = styled.section`
  padding: ${props => props.theme.spacing.section};
`;

const ServicesHeading = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  span {
    display: inline-block;
    background-color: #f5f5f5;
    color: black;
    padding: 5px 15px;
    border-radius: 50px;
    font-size: 14px;
    margin-bottom: 20px;
  }
  
  h2 {
    font-size: 50px;
    margin-bottom: 20px;
    
    @media (max-width: ${props => props.theme.breakpoints.md}) {
      font-size: 36px;
    }
  }
  
  p {
    max-width: 700px;
    margin: 0 auto;
    color: ${props => props.theme.colors?.gray || '#666'};
  }
`;

const ServiceLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 50px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  flex: none;
  width: 100%;
  height: 400px;
  
  @media (min-width: 768px) {
    width: 50%;
    height: 600px;
  }
`;

const ServiceImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.imageUrl || '/api/placeholder/800/600'});
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.5s ease;
  display: flex;
  align-items: flex-end;
  padding: 30px;
`;

const GetInTouchButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 50px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ServicesAccordion = styled.div`
  flex: 1;
  max-width: 800px;
`;

const AccordionItem = styled.div`
  border-top: 1px solid ${props => props.theme.colors?.darkGray || '#ddd'};
  &:last-child {
    border-bottom: 1px solid ${props => props.theme.colors?.darkGray || '#ddd'};
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  cursor: pointer;
  
  h3 {
    font-size: 18px;
    font-weight: 500;
  }
`;

const AccordionIcon = styled.span`
  font-size: 24px;
  transition: transform 0.3s ease;
`;

const AccordionContent = styled.div`
  padding-bottom: ${props => props.isActive ? '25px' : '0'};
  max-height: ${props => props.isActive ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${props => props.isActive ? '1' : '0'};
  
  p {
    line-height: 1.6;
    color: ${props => props.theme.colors?.gray || '#666'};
    padding-right: 40px;
  }
`;

export default Services;
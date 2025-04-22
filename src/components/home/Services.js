import React, { useState } from 'react';
import styled from 'styled-components';

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  
  const services = [
    {
      id: 1,
      title: 'Assess lighting needs',
      content: 'We take the time to understand each projects unique requirements — from architectural plans and space functionality to mood, ambiance, and energy efficiency goals. Our team works closely with clients, builders, and designers to conduct a comprehensive lighting assessment that ensures every fixture serves a clear purpose, aligns with the overall design aesthetic, and performs optimally for the environment its placed in.'
    },
    {
      id: 2,
      title: 'Cross-specify fittings',
      content: 'Our team carefully selects lighting fixtures that not only meet aesthetic requirements but also technical specifications and energy efficiency standards. We work with leading brands and manufacturers to ensure the highest quality products for your project.'
    },
    {
      id: 3,
      title: 'Customise solutions',
      content: 'Every space is unique, and we believe lighting should be too. We offer custom lighting solutions tailored to your specific needs, from bespoke fixtures to automated lighting systems that can be controlled remotely or programmed to adjust throughout the day.'
    },
    {
      id: 4,
      title: 'Installation & implementation',
      content: 'Our skilled technicians handle the installation of all lighting fixtures with precision and care. We coordinate with other contractors to ensure seamless integration with electrical systems and architectural elements.'
    },
    {
      id: 5,
      title: 'Final adjustments & training',
      content: 'After installation, we fine-tune all lighting elements to ensure optimal performance and teach you how to use and maintain your new lighting system for years of reliable service.'
    }
  ];
  
  return (
    <ServicesWrapper>
      <div className="container">
        <ServicesHeading>
          <span>Services</span>
          <h2>What we do</h2>
          <p>Find out which one of our services fit the needs of your project</p>
        </ServicesHeading>
        
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
    background-color: #222;
    color: white;
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
    color: ${props => props.theme.colors.gray};
  }
`;

const ServicesAccordion = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const AccordionItem = styled.div`
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 15px;
  background-color: ${props => props.isActive ? props.theme.colors.secondary : 'transparent'};
  border: 1px solid ${props => props.isActive ? props.theme.colors.secondary : props.theme.colors.darkGray};
  transition: all 0.3s ease;
`;

const AccordionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  
  h3 {
    font-size: 18px;
    font-weight: 500;
  }
`;

const AccordionIcon = styled.span`
  font-size: 24px;
  transition: transform 0.3s ease;
  transform: ${props => props.isActive ? 'rotate(0deg)' : 'rotate(0deg)'};
`;

const AccordionContent = styled.div`
  padding: ${props => props.isActive ? '0 20px 20px' : '0 20px'};
  max-height: ${props => props.isActive ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${props => props.isActive ? '1' : '0'};
  
  p {
    line-height: 1.6;
    color: ${props => props.theme.colors.gray};
  }
`;

export default Services;
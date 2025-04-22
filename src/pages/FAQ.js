import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../components/ui/Button';

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  
  const faqItems = [
    {
      id: 1,
      question: 'What area are you based in?',
      answer: 'We primarily serve Sydney and surrounding areas, but depending on the project, we may be able to travel further. Get in touch to discuss your location and project needs.'
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on scope and complexity. Small residential projects typically take 2-4 weeks from consultation to completion, while larger commercial projects may take 6-12 weeks. We\'ll provide a detailed timeline during your consultation.'
    },
    {
      id: 3,
      question: 'Do you offer free quotes?',
      answer: 'Yes, we offer free initial consultations and quotes for all projects. Our 30-minute consultation allows us to understand your needs and provide an accurate estimate for your lighting solutions.'
    },
    {
      id: 4,
      question: 'What\'s the process to get a tender proposal',
      answer: 'For commercial or large-scale projects requiring tender proposals, please contact our commercial team directly. We\'ll arrange a meeting to discuss your requirements, timeline, and budget before preparing a comprehensive tender document.'
    },
    {
      id: 5,
      question: 'Do you provide a guarantee for your work?',
      answer: 'Absolutely. All our workmanship comes with a 5-year guarantee, and we only use products from reputable manufacturers that offer their own product warranties, typically ranging from 2-7 years depending on the item.'
    },
    {
      id: 6,
      question: 'How do I get started with a project?',
      answer: 'The first step is booking your free 30-minute consultation. During this session, we\'ll discuss your needs, ideas, and budget. Afterward, we\'ll prepare a proposal with design concepts and pricing options tailored to your project.'
    }
  ];
  
  const toggleQuestion = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };
  
  return (
    <FAQWrapper>
      <div className="container">
        <FAQHeading>
          <span>FAQs</span>
          <h2>Answering your questions</h2>
          <p>Got more questions? Send us your enquiry below</p>
        </FAQHeading>
        
        <FAQAccordion>
          {faqItems.map(item => (
            <FAQItem key={item.id}>
              <FAQQuestion 
                onClick={() => toggleQuestion(item.id)}
                isActive={activeQuestion === item.id}
              >
                <h3>{item.question}</h3>
                <FAQIcon isActive={activeQuestion === item.id}>
                  {activeQuestion === item.id ? '−' : '+'}
                </FAQIcon>
              </FAQQuestion>
              
              <FAQAnswer isActive={activeQuestion === item.id}>
                <p>{item.answer}</p>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQAccordion>
        
        <ButtonContainer>
          <Button to="/contact" variant="outline">
            Get in touch
          </Button>
        </ButtonContainer>
      </div>
    </FAQWrapper>
  );
};

const FAQWrapper = styled.section`
  padding: ${props => props.theme.spacing.section};
`;

const FAQHeading = styled.div`
  max-width: 500px;
  margin-bottom: 40px;
  
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
    color: ${props => props.theme.colors.gray};
  }
`;

const FAQAccordion = styled.div`
  max-width: 800px;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid ${props => props.theme.colors.darkGray};
`;

const FAQQuestion = styled.div`
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

const FAQIcon = styled.span`
  font-size: 24px;
  font-weight: 300;
  transition: transform 0.3s ease;
  transform: ${props => props.isActive ? 'rotate(0deg)' : 'rotate(0deg)'};
`;

const FAQAnswer = styled.div`
  max-height: ${props => props.isActive ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${props => props.isActive ? '1' : '0'};
  padding-bottom: ${props => props.isActive ? '25px' : '0'};
  
  p {
    line-height: 1.6;
    color: ${props => props.theme.colors.gray};
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
`;

export default FAQ;
import React from 'react';
import styled from 'styled-components';
import { Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <ContactWrapper>
      <div className="container">
        <ContactLayout>
          <ContactInfo>
            <ContactLabel>Contact</ContactLabel>
            <ContactHeading>Get in touch</ContactHeading>
            <ContactText>
              For any inquiries or to explore your vision further, we invite 
              you to contact our professional team using the details 
              provided below.
            </ContactText>
            
            <ContactDetails>
              <ContactItem>
                <ContactItemLabel>Office</ContactItemLabel>
                <ContactItemValue>44 Carlingford Street, Regents Park NSW 2143</ContactItemValue>
              </ContactItem>
              
              <ContactItem>
                <ContactItemLabel>Email</ContactItemLabel>
                <ContactItemValue>info@cdaylighting.com.au</ContactItemValue>
              </ContactItem>
              
              <ContactItem>
                <ContactItemLabel>Telephone</ContactItemLabel>
                <ContactItemValue>1300 00C DAY</ContactItemValue>
              </ContactItem>
            </ContactDetails>
            
            <SocialSection>
              <SocialHeading>Follow us</SocialHeading>
              <SocialLinks>
                <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <Instagram size={24} />
                </SocialLink>
              </SocialLinks>
            </SocialSection>
          </ContactInfo>
          
          <ContactForm>
            <FormGroup>
              <FormLabel>Name<Required>*</Required></FormLabel>
              <FormInput type="text" placeholder="John Smith" required />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Email<Required>*</Required></FormLabel>
              <FormInput type="email" placeholder="johnsmith@gmail.com" required />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Phone Number<Required>*</Required></FormLabel>
              <FormInput type="tel" placeholder="04" required />
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea placeholder="Hello, I'd like to enquire about..." rows={6} />
            </FormGroup>
            
            <SubmitButton type="submit">Send message</SubmitButton>
          </ContactForm>
        </ContactLayout>
      </div>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  padding: ${props => props.theme.spacing?.section || '80px 0'};
  background-color: #111;
  color: white;
`;

const ContactLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 60px;
  }
`;

const ContactInfo = styled.div`
  @media (min-width: 768px) {
    width: 40%;
  }
`;

const ContactLabel = styled.div`
  display: inline-block;
  background-color: #333;
  color: white;
  padding: 5px 15px;
  border-radius: 50px;
  font-size: 14px;
  margin-bottom: 20px;
`;

const ContactHeading = styled.h2`
  font-size: 42px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ContactText = styled.p`
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 40px;
`;

const ContactDetails = styled.div`
  margin-bottom: 40px;
`;

const ContactItem = styled.div`
  margin-bottom: 24px;
`;

const ContactItemLabel = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const ContactItemValue = styled.p`
  color: #aaa;
`;

const SocialSection = styled.div`
  margin-top: 30px;
`;

const SocialHeading = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialLink = styled.a`
  color: white;
  transition: color 0.2s ease;
  
  &:hover {
    color: #aaa;
  }
`;

const ContactForm = styled.form`
  @media (min-width: 768px) {
    width: 60%;
  }
  background-color: #222;
  padding: 30px;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  margin-bottom: 24px;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
`;

const Required = styled.span`
  color: #f85555;
  margin-left: 2px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  background-color: #333;
  border: 1px solid #444;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  
  &::placeholder {
    color: #777;
  }
  
  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background-color: #333;
  border: 1px solid #444;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  resize: vertical;
  
  &::placeholder {
    color: #777;
  }
  
  &:focus {
    outline: none;
    border-color: #666;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: white;
  color: black;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #eee;
  }
`;

export default ContactSection;
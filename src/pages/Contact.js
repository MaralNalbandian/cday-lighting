// import React, { useState } from 'react';
// import styled from 'styled-components';
// import ConsultationBanner from '../components/layout/ConsultationBanner';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     projectType: '',
//     message: ''
//   });
  
//   const [formSubmitted, setFormSubmitted] = useState(false);
  
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real application, you would submit the form data to a server here
//     console.log('Form submitted:', formData);
//     setFormSubmitted(true);
    
//     // Reset form after submission
//     setFormData({
//       name: '',
//       email: '',
//       phone: '',
//       projectType: '',
//       message: ''
//     });
    
//     // Reset form submission status after 5 seconds
//     setTimeout(() => {
//       setFormSubmitted(false);
//     }, 5000);
//   };

//   return (
//     <ContactPageWrapper>
//       <ConsultationBanner />
      
//       <HeroSection>
//         <div className="container">
//           <h1>Get in Touch</h1>
//           <p>For inquiries or to discuss your lighting project needs</p>
//         </div>
//       </HeroSection>
      
//       <ContactContent>
//         <div className="container">
//           <ContactGrid>
//             <ContactFormContainer>
//               <h2>Send us a message</h2>
//               <p>Fill out the form below and one of our lighting specialists will get back to you shortly.</p>
              
//               {formSubmitted ? (
//                 <SuccessMessage>
//                   <SuccessIcon>✓</SuccessIcon>
//                   <h3>Thank you for your message!</h3>
//                   <p>We've received your inquiry and will contact you within 24 hours.</p>
//                 </SuccessMessage>
//               ) : (
//                 <ContactForm onSubmit={handleSubmit}>
//                   <FormGroup>
//                     <label htmlFor="name">Name*</label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="John Smith"
//                       required
//                     />
//                   </FormGroup>
                  
//                   <FormGroup>
//                     <label htmlFor="email">Email*</label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="johnsmith@gmail.com"
//                       required
//                     />
//                   </FormGroup>
                  
//                   <FormGroup>
//                     <label htmlFor="phone">Phone Number*</label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="04XX XXX XXX"
//                       required
//                     />
//                   </FormGroup>
                  
//                   <FormGroup>
//                     <label htmlFor="projectType">Project Type</label>
//                     <select
//                       id="projectType"
//                       name="projectType"
//                       value={formData.projectType}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select Project Type</option>
//                       <option value="residential">Residential</option>
//                       <option value="commercial">Commercial</option>
//                       <option value="hospitality">Hospitality</option>
//                       <option value="retail">Retail</option>
//                       <option value="other">Other</option>
//                     </select>
//                   </FormGroup>
                  
//                   <FormGroup fullWidth>
//                     <label htmlFor="message">Message</label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Hello, I'd like to enquire about..."
//                       rows="6"
//                     ></textarea>
//                   </FormGroup>
                  
//                   <SubmitButton type="submit">Send message</SubmitButton>
//                 </ContactForm>
//               )}
//             </ContactFormContainer>
            
//             <ContactInfo>
//               <InfoSection>
//                 <h3>Office</h3>
//                 <p>44 Carlingford Street<br />Regents Park NSW 2143</p>
//                 <MapLink href="https://goo.gl/maps/123" target="_blank" rel="noopener noreferrer">
//                   View on map
//                 </MapLink>
//               </InfoSection>
              
//               <InfoSection>
//                 <h3>Email</h3>
//                 <a href="mailto:info@cdaylighting.com.au">info@cdaylighting.com.au</a>
//               </InfoSection>
              
//               <InfoSection>
//                 <h3>Telephone</h3>
//                 <a href="tel:1300000CDAY">1300 00C DAY</a>
//               </InfoSection>
              
//               <InfoSection>
//                 <h3>Opening Hours</h3>
//                 <p>Monday - Friday: 8:30am - 5:30pm</p>
//                 <p>Saturday: 9:00am - 1:00pm</p>
//                 <p>Sunday: Closed</p>
//               </InfoSection>
              
//               <InfoSection>
//                 <h3>Follow us</h3>
//                 <SocialLinks>
//                   <SocialLink href="https://instagram.com/cdaylighting" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-instagram"></i>
//                   </SocialLink>
//                   <SocialLink href="https://facebook.com/cdaylighting" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-facebook-f"></i>
//                   </SocialLink>
//                   <SocialLink href="https://linkedin.com/company/cdaylighting" target="_blank" rel="noopener noreferrer">
//                     <i className="fab fa-linkedin-in"></i>
//                   </SocialLink>
//                 </SocialLinks>
//               </InfoSection>
//             </ContactInfo>
//           </ContactGrid>
//         </div>
//       </ContactContent>
      
//       <MapSection>
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13251.040790508032!2d151.0204175!3d-33.8688197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sau!4v1682397416190!5m2!1sen!2sau"
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="CDAY Lighting Location"
//         ></iframe>
//       </MapSection>
      
//       <FAQSection>
//         <div className="container">
//           <SectionHeading>
//             <h2>Frequently Asked Questions</h2>
//             <p>Find answers to common questions about our services and process</p>
//           </SectionHeading>
          
//           <FAQGrid>
//             <FAQItem>
//               <h3>What areas do you service?</h3>
//               <p>We primarily serve Sydney and surrounding areas, but depending on the project, we may be able to travel further. Contact us to discuss your location and project needs.</p>
//             </FAQItem>
            
//             <FAQItem>
//               <h3>Do you offer residential and commercial services?</h3>
//               <p>Yes, we provide lighting solutions for both residential and commercial projects of all sizes, from single-room renovations to entire buildings or complexes.</p>
//             </FAQItem>
            
//             <FAQItem>
//               <h3>How much does a lighting project cost?</h3>
//               <p>Project costs vary widely depending on the scope, complexity, and specific requirements. We offer free consultations to provide accurate estimates based on your needs.</p>
//             </FAQItem>
            
//             <FAQItem>
//               <h3>How long does a typical project take?</h3>
//               <p>Project timelines vary by scope. Small projects may take as little as 2-4 weeks from consultation to completion, while larger commercial projects can take 6-12 weeks or more.</p>
//             </FAQItem>
//           </FAQGrid>
//         </div>
//       </FAQSection>
//     </ContactPageWrapper>
//   );
// };

// const ContactPageWrapper = styled.main`
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

// const ContactContent = styled.section`
//   padding: 80px 0;
// `;

// const ContactGrid = styled.div`
//   display: grid;
//   grid-template-columns: 3fr 2fr;
//   gap: 60px;
  
//   @media (max-width: ${props => props.theme.breakpoints.lg}) {
//     grid-template-columns: 1fr;
//     gap: 40px;
//   }
// `;

// const ContactFormContainer = styled.div`
//   h2 {
//     font-size: 28px;
//     margin-bottom: 15px;
//   }
  
//   > p {
//     color: ${props => props.theme.colors.gray};
//     margin-bottom: 30px;
//   }
// `;

// const ContactForm = styled.form`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 20px;
// `;

// const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   grid-column: ${props => props.fullWidth ? '1 / -1' : 'auto'};
  
//   label {
//     margin-bottom: 8px;
//     font-weight: 500;
//   }
  
//   input, select, textarea {
//     padding: 12px 15px;
//     background-color: ${props => props.theme.colors.secondary};
//     border: 1px solid ${props => props.theme.colors.darkGray};
//     border-radius: 5px;
//     color: ${props => props.theme.colors.white};
//     font-size: 16px;
    
//     &:focus {
//       outline: none;
//       border-color: ${props => props.theme.colors.primary};
//     }
    
//     &::placeholder {
//       color: ${props => props.theme.colors.gray};
//     }
//   }
  
//   textarea {
//     resize: vertical;
//   }
// `;

// const SubmitButton = styled.button`
//   grid-column: 1 / -1;
//   padding: 12px 24px;
//   background-color: ${props => props.theme.colors.primary};
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   font-weight: 500;
//   cursor: pointer;
//   transition: background-color 0.3s ease;
  
//   &:hover {
//     background-color: ${props => props.theme.colors.primary}dd;
//   }
// `;

// const SuccessMessage = styled.div`
//   text-align: center;
//   padding: 40px;
//   background-color: ${props => props.theme.colors.secondary};
//   border-radius: 10px;
  
//   h3 {
//     font-size: 24px;
//     margin-bottom: 15px;
//   }
  
//   p {
//     color: ${props => props.theme.colors.gray};
//   }
// `;

// const SuccessIcon = styled.div`
//   width: 60px;
//   height: 60px;
//   background-color: ${props => props.theme.colors.primary};
//   color: white;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   font-size: 30px;
//   margin: 0 auto 20px;
// `;

// const ContactInfo = styled.div`
//   background-color: ${props => props.theme.colors.secondary};
//   padding: 40px;
//   border-radius: 10px;
// `;

// const InfoSection = styled.div`
//   margin-bottom: 30px;
  
//   &:last-child {
//     margin-bottom: 0;
//   }
  
//   h3 {
//     font-size: 20px;
//     margin-bottom: 10px;
//   }
  
//   p, a {
//     color: ${props => props.theme.colors.gray};
//     line-height: 1.6;
//   }
  
//   a {
//     display: inline-block;
//     transition: color 0.3s ease;
    
//     &:hover {
//       color: ${props => props.theme.colors.white};
//     }
//   }
// `;

// const MapLink = styled.a`
//   display: inline-flex;
//   align-items: center;
//   color: ${props => props.theme.colors.primary} !important;
//   margin-top: 5px;
//   font-weight: 500;
  
//   &:hover {
//     text-decoration: underline;
//   }
  
//   &::after {
//     content: '→';
//     margin-left: 5px;
//   }
// `;

// const SocialLinks = styled.div`
//   display: flex;
//   gap: 15px;
// `;

// const SocialLink = styled.a`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 40px;
//   height: 40px;
//   background-color: ${props => props.theme.colors.darkGray};
//   border-radius: 50%;
//   transition: background-color 0.3s ease;
  
//   &:hover {
//     background-color: ${props => props.theme.colors.primary};
//   }
  
//   i {
//     color: white;
//     font-size: 18px;
//   }
// `;

// const MapSection = styled.section`
//   height: 450px;
//   width: 100%;
  
//   iframe {
//     filter: grayscale(1) invert(0.9) contrast(1.2);
//   }
// `;

// const FAQSection = styled.section`
//   padding: 80px 0;
//   background-color: ${props => props.theme.colors.background};
// `;

// const SectionHeading = styled.div`
//   text-align: center;
//   margin-bottom: 50px;
  
//   h2 {
//     font-size: 36px;
//     margin-bottom: 15px;
//   }
  
//   p {
//     font-size: 18px;
//     color: ${props => props.theme.colors.gray};
//     max-width: 600px;
//     margin: 0 auto;
//   }
// `;

// const FAQGrid = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 30px;
  
//   @media (max-width: ${props => props.theme.breakpoints.md}) {
//     grid-template-columns: 1fr;
//   }
// `;

// const FAQItem = styled.div`
//   background-color: ${props => props.theme.colors.secondary};
//   padding: 30px;
//   border-radius: 10px;
  
//   h3 {
//     font-size: 20px;
//     margin-bottom: 15px;
//   }
  
//   p {
//     color: ${props => props.theme.colors.gray};
//     line-height: 1.6;
//   }
// `;

// export default Contact;
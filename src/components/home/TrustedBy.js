import React from 'react';
import styled from 'styled-components';

const TrustedBy = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2>Trusted by</h2>
        <div className="trusted-by-logos">
          <img src="/images/Deicorp.jpg" alt="Deicorp" />
          <img src="/images/UTSlogo.jpg" alt="UTS" />
          <img src="/images/TQMlogo.jpg" alt="TQM" />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: #000;
  color: white;
  padding: 40px 0;
  width: 100%;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 40px;
    font-weight: normal;
    color: white;
  }
  
  .trusted-by-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
  }
  
  img {
    height: auto;
    width: 70px;
    filter: brightness(1);
  }
`;

export default TrustedBy;
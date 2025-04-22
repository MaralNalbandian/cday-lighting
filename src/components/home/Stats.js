import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';

// Component for animating the counting effect
const CountUp = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const startTimeRef = useRef(null);
  const frameRef = useRef(null);
  
  useEffect(() => {
    if (!inView) return;
    
    const animate = (timestamp) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = timestamp - startTimeRef.current;
      
      // Calculate current count based on progress
      const currentCount = Math.min(
        Math.floor((progress / duration) * end), 
        end
      );
      
      setCount(currentCount);
      
      if (progress < duration) {
        frameRef.current = requestAnimationFrame(animate);
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [inView, end, duration]);
  
  return <span ref={ref}>{count}{suffix}</span>;
};

const Stats = () => {
  const stats = [
    {
      id: 1,
      number: 40,
      suffix: '',
      label: 'Years experience',
      description: 'Years of combined experience in lighting improvement'
    },
    {
      id: 2,
      number: 250,
      suffix: '',
      label: 'Projects completed',
      description: 'Over 250 successful projects delivered with quality and care'
    },
    {
      id: 3,
      number: 30,
      suffix: '',
      label: 'Skilled Tradespeople',
      description: 'Our team of 30 experts ensures top-quality results'
    },
    {
      id: 4,
      number: 100,
      suffix: '%',
      label: 'Client satisfaction',
      description: 'All of our clients are satisfied with our work and service'
    }
  ];
  
  return (
    <StatsWrapper>
      <div className="container">
        <StatsGrid>
          {stats.map(stat => (
            <StatItem key={stat.id}>
              <StatNumber>
                <CountUp end={stat.number} suffix={stat.suffix} />
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
              <StatDescription>{stat.description}</StatDescription>
            </StatItem>
          ))}
        </StatsGrid>
      </div>
    </StatsWrapper>
  );
};

const StatsWrapper = styled.section`
  padding: ${props => props.theme.spacing.section};
  background-color: ${props => props.theme.colors.background};
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 64px;
  font-weight: 200; /* Extra light/thin font weight to match the screenshot */
  margin-bottom: 10px;
  color: ${props => props.theme.colors.black};
  line-height: 1;
`;

const StatLabel = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${props => props.theme.colors.black};
`;

const StatDescription = styled.div`
  font-size: 14px;
  color: ${props => props.theme.colors.lightText};
  line-height: 1.5;
`;

export default Stats;
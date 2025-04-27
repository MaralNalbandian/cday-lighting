import React, { useRef, useLayoutEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const CARD_HEIGHT = 660;
const GAP = 40;
const SCROLL_STEP = CARD_HEIGHT * 0.9;

const projects = [
  {
    id: 1,
    title: 'Modern kitchen lighting',
    description: 'Lighting played a pivotal role in transforming this kitchen into a functional and visually striking space. We designed and installed a custom lighting solution that layered ambient, task, and accent lighting to enhance both usability and mood. From under-cabinet LEDs that brighten work surfaces to statement pendant lights that anchor the island, every fixture was carefully selected to complement the kitchen\'s modern aesthetic. The result is a beautifully lit environment that elevates everyday living and entertaining.',
    image: '/images/kitchen.jpg',
    tags: ['Kitchen', '4 weeks'],
    testimonial: {
      text: 'The custom lighting CDAY designed completely transformed our kitchen — it\'s not only beautiful but also incredibly functional. From the ambient glow to the focused task lighting, every detail was thoughtfully done. CDAY Lighting truly brought our vision to life.',
      logo: '/images/tqm-logo.png'
    }
  },
  {
    id: 2,
    title: 'Architectural entranceway',
    description: 'Our team designed and built a striking vertical LED lighting which adds a bold architectural element to this entranceway, creating a warm and welcoming ambiance. The sleek lines and soft glow not only enhance visibility but also elevate the overall aesthetic, making a powerful first impression.',
    image: '/images/entranceway.jpg',
    tags: ['External Works', '1 month'],
    testimonial: {
      text: 'The vertical LED lighting has given our entrance a sleek, modern vibe that immediately grabs attention. It creates a warm, welcoming atmosphere, and guests always remark on it. CDAY Lighting brought our vision to life perfectly.',
      logo: '/images/Deicorp.jpg'
    }
  },
  {
    id: 3,
    title: 'High-rise apartments',
    description: 'We revitalized this high-rise apartment with a fresh, modern design, focusing on sleek fixtures, high-end finishes, and strategically placed lighting. The lighting design was carefully tailored to highlight the apartment\'s best features, creating an ambiance of sophistication and warmth. The layout was optimized to maximize space, resulting in a luxurious, functional, and visually stunning living environment.',
    image: '/images/highrise.jpg',
    tags: ['Apartment', '6 weeks'],
    testimonial: {
      text: 'CDAY Lighting really stepped up our high-rise apartment with sleek, functional lighting that made the space feel brighter and more polished. Ruth, our lighting specialist, was awesome to work with — her design ideas made all the difference.',
      logo: '/images/Deicorp.jpg'
    }
  }
];

const FramerCardOverlap = () => {
  const sectionRef = useRef();
  const stackRef = useRef();
  const cardRefs = useRef([]);

  if (cardRefs.current.length !== projects.length) {
    cardRefs.current = Array(projects.length).fill().map((_, i) => cardRefs.current[i] || React.createRef());
  }

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const cards = cardRefs.current.map(r => r.current);

    // Pin the stack for the duration of all transitions
    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: `+=${SCROLL_STEP * (projects.length - 1)}`,
      pin: stackRef.current,
      pinSpacing: true,
      scrub: false,
      anticipatePin: 1,
    });

    // Set every card except first underneath, ready to be glided up
    cards.forEach((card, i) => {
      if (i === 0) {
        gsap.set(card, { y: 0, zIndex: projects.length });
      } else {
        gsap.set(card, { y: CARD_HEIGHT + GAP, zIndex: projects.length - i });
      }

      if (i === 0) return;

     // ScrollTrigger for each card (except first)
     ScrollTrigger.create({
      trigger: section,
      start: `top+=${SCROLL_STEP * (i - 1)} top`,
      end: `top+=${SCROLL_STEP * i} top`,
      scrub: true,
      onUpdate: self => {
        const progress = self.progress;
        gsap.to(card, {
          y: (1 - progress) * (CARD_HEIGHT + GAP),
          ease: "linear",
          duration: 0.01,
          overwrite: "auto"
        });
        
        // Set all cards to a base z-index
        cards.forEach((c, idx) => c.style.zIndex = 1);
      
        // Current gliding card is on top
        card.style.zIndex = projects.length;
      
        // Previous card is just underneath
        cards[i - 1].style.zIndex = projects.length - 1;
      }
    });
  });

    return () => {
      ScrollTrigger.getAll().forEach(trig => trig.kill());
      cards.forEach(card => card && gsap.set(card, { clearProps: "all" }));
    };
  }, []);

  return (
    <Outer ref={sectionRef} style={{ minHeight: `${CARD_HEIGHT + SCROLL_STEP * (projects.length - 1) + 1000}px`}}>
      <Stack ref={stackRef}>
        {projects.map((proj, i) => (
          <ProjectCard
            key={proj.id}
            ref={cardRefs.current[i]}
            $isDark={i % 2 === 1}
          >
            <CardInner $isDark={i % 2 === 1}>
              <CardImg><img src={proj.image} alt={proj.title} /></CardImg>
              <CardContent $isDark={i % 2 === 1}>
                <h2>{proj.title}</h2>
                <p>{proj.description}</p>
                <TagGroup>
                  {(proj.tags || []).map((tag, idx) => (
                    <Tag key={idx}>{tag}</Tag>
                  ))}
                </TagGroup>
                {proj.testimonial && (
                  <Testimonial>
                    <Quote>“</Quote><span>{proj.testimonial.text}</span>
                    {proj.testimonial.logo &&
                      <ClientLogo>
                        <img src={proj.testimonial.logo} alt="Logo" />
                      </ClientLogo>
                    }
                  </Testimonial>
                )}
              </CardContent>
            </CardInner>
          </ProjectCard>
        ))}
      </Stack>
      <div style={{ height: "700px", width: 1, opacity: 0, pointerEvents: "none" }} aria-hidden="true" />
    </Outer>
  );
};

// Styled Components (unchanged, you can use yours)
const Outer = styled.section`
  background: #fff;
  position: relative;
  width: 100vw;
  padding-top: 64px;
  padding-bottom: 64px;
`;
const Stack = styled.div`
  position: relative;
  width: 100%;
  min-height: ${CARD_HEIGHT}px;
  /* Remove fixed height! */
  /* Optionally: height: auto; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  pointer-events: none;
`;
const ProjectCard = styled.div`
  position: absolute;
  left: 50%;
  width: 90vw;
  max-width: 1200px;
  transform: translateX(-50%);
  will-change: transform;
  border-radius: 22px;
  background: ${({ $isDark }) => ($isDark ? "#19191b" : "#eceef1")};
  box-shadow: 0 6px 28px 0 rgba(0,0,0,0.14);
  pointer-events: auto;
  transition: box-shadow 0.3s;
  overflow: visible;
`;
const CardInner = styled.div`
  display: grid; grid-template-columns: 1.08fr 1.34fr;
  min-height: ${CARD_HEIGHT}px; height: ${CARD_HEIGHT}px;
  background: ${({ $isDark }) => ($isDark ? "#19191b" : "#eceef1")};
  border-radius: 22px;
  box-shadow: 0 14px 60px rgba(22,22,28,0.08);
  @media (max-width: 900px) {
    grid-template-columns: 1fr; min-height: 340px; height: auto;
  }
`;
const CardImg = styled.div`
  display: flex; align-items: center; justify-content: center; padding: 48px 36px;
  img {
    border-radius: 18px;
    width: 100%;
    max-height: 410px;
    object-fit: cover;
    box-shadow: 0 2px 24px rgba(50,50,65,0.10);
  }
  @media (max-width: 900px) { padding: 16px; img { max-height: 170px; } }
`;
const CardContent = styled.div`
  padding: 48px 40px; color: ${({ $isDark }) => ($isDark ? '#fff' : "#23242d")};
  display: flex; flex-direction: column; justify-content: center;
  h2 { font-size: 2.6rem; margin: 0 0 12px; font-weight: 700;}
  p { font-size: 18px; margin-bottom: 18px; line-height: 1.6;}
  @media (max-width: 900px) { padding: 22px 10px; h2{font-size:1.3rem;}p{font-size:1rem;}}
`;
const TagGroup = styled.div`
  display: flex; gap: 12px; margin-bottom: 16px;
`;
const Tag = styled.span`
  background: #232327; color: #fff; border-radius: 22px;
  padding: 7px 19px; font-size: 1rem; font-weight: 500; opacity: 0.92;
`;
const Testimonial = styled.div`
  margin-top: 14px; padding-top: 13px; border-top: 1px solid #38383f;
  display:flex;align-items:center;gap:12px;min-height:55px;position:relative;
  span{font-size:1.1rem; font-style:italic; opacity:0.95;}
`;
const Quote = styled.span`font-size:2.3rem;opacity:0.24;`;
const ClientLogo = styled.div`
  margin-left: auto; width: 90px; height: 90px; 
  img { width: 100%; height: 100%; object-fit: contain;}
`;

export default FramerCardOverlap;
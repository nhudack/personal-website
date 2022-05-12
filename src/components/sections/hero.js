import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroBackground = styled.div`
  background-image: url(${"/hero.jpg"});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  margin-bottom: 0 0;
  left: calc(-50vw + 50%);
  opacity: 0.5;
`;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0 calc(100% - 100vw + 150px);
  opacity: 1;

  @media (max-width: 1080px) {
    padding: 0 calc(100% - 100vw + 100px);
  }
  @media (max-width: 768px) {
    padding: 0 calc(100% - 100vw + 50px);
  }
  @media (max-width: 480px) {
    padding: 0 calc(100% - 100vw + 25px);
  }
`;

const Hero = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledHeroBackground>
      <StyledHeroSection ref={revealContainer}>
        <h2 className="numbered-heading">Hey, I'm</h2>
        <h2 className="big-heading">Nick Hudack</h2>
      </StyledHeroSection>
    </StyledHeroBackground>
  );
};

export default Hero;

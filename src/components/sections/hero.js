import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroBackground = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 0;
  min-width: 100vw
  width: 100%
`;

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0;
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
    <StyledHeroBackground img={"/hero.png"}>
    <StyledHeroSection ref={revealContainer} img={"/hero.png"}>
      <h2 className="numbered-heading">Hey, I'm</h2>
      <h2 className="big-heading">Nick Hudack</h2>
    </StyledHeroSection>
    </StyledHeroBackground>
  );
};

export default Hero;

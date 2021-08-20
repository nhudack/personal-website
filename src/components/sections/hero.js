import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0;

  background: url(${props => props.img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100vh
  max-width: 100vh
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
    <StyledHeroSection ref={revealContainer} img={"/hero.png"}>
      <h2 className="numbered-heading">Hey, I'm</h2>
      <h2 className="big-heading">Nick Hudack</h2>
    </StyledHeroSection>
  );
};

export default Hero;

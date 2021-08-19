import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledHomeSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 0;

  .hero-image {
    background-image: url("/src/images/background.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    position: relative;
  }
`;

const Home = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <StyledHomeSection ref={revealContainer}>
      <div className="hero-image">
        <h2 className="numbered-heading">Hey, I'm</h2>
        <h2 className="big-heading">Nick Hudack</h2>
      </div>
    </StyledHomeSection>
  );
};

export default Home;

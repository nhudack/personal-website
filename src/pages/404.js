import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Layout } from '@components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: var(--blue);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.button};
  margin-top: 40px;
`;

const NotFoundPage = ({ location }) => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="Page Not Found" />

      <StyledMainContainer className="fillHeight" ref={revealContainer}>
        <StyledTitle>404</StyledTitle>
        <StyledSubtitle>Page Not Found</StyledSubtitle>
        <StyledHomeButton to="/">Go Home</StyledHomeButton>
      </StyledMainContainer>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;

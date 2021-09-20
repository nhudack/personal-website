import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig, socialMedia, } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';
import { Icon } from '@components/icons';

const StyledContactSection = styled.section`
  max-width: 600px;
  margin: 0 auto 100px;
  text-align: center;
  color: var(--dark-slate);

  @media (max-width: 768px) {
    margin: 0 auto 50px;
  }

  .title {
    font-size: clamp(40px, 5vw, 60px);
  }

  .resume-button {
    ${({ theme }) => theme.mixins.button};
    margin: 10px;
  }
`;

const StyledSocialLinks = styled.div`
  display: block;
  width: 100%;
  max-width: 270px;
  margin: 10px auto 10px;
  color: var(--light-navy);

  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      padding: 5px;
      svg {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

const Contact = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const ResumeLink = (
    <a className="resume-button" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
      Resume
    </a>
  );

  return (
    <StyledContactSection id="contact" ref={revealContainer}>
      <h2 className="numbered-heading">Contact Me</h2>

      <h2 className="title">Let's connect!</h2>

      <p>
        You can find me on almost any social media. However, the best way to contact me is via email.
      </p>

      <StyledSocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, i) => (
              <li key={i}>
                <a href={url} aria-label={name} target="_blank">
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </StyledSocialLinks>

      {ResumeLink}
    </StyledContactSection>
  );
};

export default Contact;

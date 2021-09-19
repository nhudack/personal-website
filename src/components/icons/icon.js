import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconEmail,
  IconExternal,
  IconFolder,
  IconGitHub,
  IconGitHubLink,
  IconLinkedIn,
  IconPlayStore,
  IconResume,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Email':
      return <IconEmail />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'GitHub':
      return <IconGitHub />;
    case 'GitHubLink':
      return <IconGitHubLink />;
    case 'LinkedIn':
      return <IconLinkedIn />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Resume':
      return <IconResume />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

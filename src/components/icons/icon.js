import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconExternal,
  IconFolder,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconEmail,
  IconPlayStore,
  IconTwitter,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'LinkedIn':
      return <IconLinkedIn />;
    case 'Email':
      return <IconEmail />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Twitter':
      return <IconTwitter />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;

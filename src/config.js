module.exports = {
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/nhudack',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nickhudack',
    },
    {
      name: 'Resume',
      url: '/Nick-Hudack-Resume.pdf',
    },
    {
      name: 'Email',
      url: 'mailto:nhudack@gmail.com',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    /*{
      name: 'Experience',
      url: '/#experience',
    },*/
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    blue: '#0066cc',
    navy: '#0a192f',
    white: '#e6f1ff',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),

  srConfigNav: (delay = 200, viewFactor = 0.25) => ({
    origin: 'top',
    distance: '20px',
    duration: 600,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: -99999, right: 0, bottom: -99999, left: 0 },
  }),
};

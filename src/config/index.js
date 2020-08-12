module.exports = {
  siteTitle: 'Asraf Hossain | Software Engineer',
  siteDescription:
    'Asraf Hossain is a Front-end Software Engineer specializing in building (and occasionally designing) exceptional, high-quality websites and applications for both mobile and web.',
  siteKeywords:
    'Asraf Hossain, software engineer, front-end engineer, web developer, javascript, react developer',
  siteUrl: 'https://asraf.ml',
  googleAnalyticsID: 'UA-175029123-1',
  siteLanguage: 'en_US',
  name: 'Asraf Hossain',
  location: 'Dhaka, Bangladesh',
  email: 'asrafhossain197gmail.com',
  github: 'https://github.com/ashwoolford',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/ashwoolford',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ashwoolford',
    },
    {
      name: 'Codepen',
      url: 'https://codesandbox.io/u/ashwoolford',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/pages/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      keyframes: {
        growShrink: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        growShrink: 'growShrink 0.5s ease-in-out',
      },
      container: {
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
        },
      },
      colors: {
        primaryGray: '#252525',
        eventsGrey: '#EDEBEB',
        darkGrey: '#D9D9D9',
        eventsTextGrey: '#737373',
        redStop: '#912024',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add the font family you want
      },
      boxShadow: {
        'dark-bottom-left': '-3px 3px 4px rgba(0, 0, 0, 0.9)',
        'light-bottom-left': '-6px 6px 12px rgba(0, 0, 0, 0.9)',
        'light-bottom-left-hover': '-10px 10px 20px rgba(0, 0, 0, 0.9)',
        'red-bottom-left': '-6px 6px 12px #E91C24',
        'red-bottom-left-hover': '-10px 10px 20px #E91C24',
        'dark-bottom': '0px 3px 4px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        'red-to-black': 'linear-gradient(to right, red, black)',
        'dark-red-to-light-red': 'linear-gradient(to right, #631818, #801313)',
      },
      maskImage: {
        'fade-t-b': 'linear-gradient(to bottom, transparent, black)',
      },
    },
    variants: {
      extend: {
        boxShadow: ['hover'],
      },
    },
  },
  plugins: [],
};

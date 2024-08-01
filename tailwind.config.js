/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/pages/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
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
        eventsDarkGrey: '#D9D9D9',
        eventsTextGrey: '#737373',
        redStop: '#912024',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Add the font family you want
      },
      boxShadow: {
        'dark-bottom-left': '-3px 3px 4px rgba(0, 0, 0, 0.9)', // adjust values as needed
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
  },
  plugins: [],
};

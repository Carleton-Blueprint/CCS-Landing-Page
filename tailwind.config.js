/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
    
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] // Add the font family you want
      },
      boxShadow: {
        'dark-bottom-left': '-3px 3px 4px rgba(0, 0, 0, 0.9)', // adjust values as needed
        'dark-bottom': '0px 3px 4px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        'red-to-black': 'linear-gradient(to right, red, black)',
      },
      maskImage: {
        'fade-t-b': 'linear-gradient(to bottom, transparent, black)',
      }
      
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      container: {
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] // Add the font family you want
      }
      
    },
  },
  plugins: [],
}
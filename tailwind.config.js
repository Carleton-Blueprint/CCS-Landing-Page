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
      }
      
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'lg': '1270px',
    },
    fontFamily:{
      'sans': ['"Montserrat"', 'sans-serif'],
    },
    colors: {
      PURPLE: '#A64AC9',
      BLUE: '#17E9E0',
      GRAY: '#2E3440',
      BLACK: '#1E1E1E',
      WHITE: '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
};
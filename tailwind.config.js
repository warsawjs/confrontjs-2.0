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
      primary: '#A64AC9',
      secondary: '#17E9E0',
      tertiary: '#2E3440',
      black: '#1E1E1E',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
};


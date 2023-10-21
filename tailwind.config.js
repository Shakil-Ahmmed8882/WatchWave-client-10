/** @type {import('tailwindcss').Config} */
export default {
  'darkMode':'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-clr": 'cyan',
        "sm-primary-clr": "white",
        "light-text": '#1b1b1b',
        "sm-light-text": 'gray',
      },
    },
  },
  darkMode: 'class', // Enable manual dark mode
  plugins: [require('daisyui')],
}
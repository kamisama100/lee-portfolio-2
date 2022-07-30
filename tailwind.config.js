/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'xs': '150px',
      ...defaultTheme.screens,
    },
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'wiggle': 'wiggle 2s infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
    },
    fontFamily:{
      workSans:['Roboto Mono', 'monospace'],
    },
  },
  plugins: [],
}

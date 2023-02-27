/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#0D6EFD',
        blue: '#22B2ED',
        gray: colors.gray,
        gray2: '#E3E8EE',
        cyan: colors.cyan,
        teal: colors.teal,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D6EFD',
        blue: '#22B2ED',
        gray: '#8B96A5',
        gray2: '#E3E8EE',
      },
    },
  },
  plugins: [],
};

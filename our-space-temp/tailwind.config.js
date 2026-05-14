/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF8F2',
        paper: '#FDEFE3',
        'paper-dark': '#F7E2D2',
        beige: '#EED9C8',

        pink: {
          DEFAULT: '#E8A0BF',
          soft: '#F4C6D7',
          light: '#FBE1EC',
          deep: '#D977A0',
        },

        rose: '#C85C8E',

        text: {
          DEFAULT: '#4A3B35',
          secondary: '#7A6A63',
          muted: '#A08D85',
        },

        gold: '#D6B37A',
        brown: '#8B6B5C',
      },

      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
    },
  },
  plugins: [],
}
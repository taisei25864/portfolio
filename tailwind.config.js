/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#FFFFFF',
      'frontend': '#FF8383',
      'backend': '#59AEC9',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    fontFamily: {
      body: [
        "Goudy Bookletter 1911"
      ],
      georgia: ['Georgia'],
      // ringo : [ "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"]
    },
  },
  plugins: [],
}


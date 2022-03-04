// tailwind.config.js
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#FF2F92',
      secondary: '#ff59a8',
      accent: '#AA00FF',

      blue: colors.blue,
      gray: colors.trueGray,
      grey: colors.gray,
      red: colors.rose,
      green: colors.green,
      yellow: colors.yellow,
      black: colors.black,

      transparent: 'transparent'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
  ]
}

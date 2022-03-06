const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      darkGreen: '#3B9775',
      green: '#81D287',
      yellow: '#F4C82D',
      orange: '#F89B4B',
      red: '#E2564A',
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    },
    extend: {},
  },
  plugins: [],
}

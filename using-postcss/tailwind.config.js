const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./public/index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#0a558c',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

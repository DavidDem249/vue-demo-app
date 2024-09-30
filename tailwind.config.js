const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    colors: {
      teal: colors.teal,
      cyan: colors.cyan,
      gray: colors.gray,
      white: "#fff",
      "dark-purple": "#081A51",
      "light-white": "rgba(255,255,255,0.18)",
      "amber": "rgb(252 211 77)",
      "transparent": 'transparent'
    },
    extend: {},
  },
  plugins: [],
}


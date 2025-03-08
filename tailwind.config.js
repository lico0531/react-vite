/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'react': '#61dafb',
      'firebase': '#ffa611',
      'placeholder': '#ddd',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      slate: colors.slate,
      violet: colors.violet
    },
    extend: {
      fontFamily: {
        NotoSansKR: ['Noto Sans KR', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


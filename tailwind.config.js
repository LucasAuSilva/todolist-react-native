/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter_400Regular', ...defaultTheme.fontFamily.sans],
        'inter-bold': ['Inter_700Bold']
      },
      colors: {
        'blue-dark': '#1e6f9f',
        'purple-dark': '#5e60ce',
        blue: '#4ea8de',
        purple: '#8284fa',
        danger: '#e25858',
        gray: {
          100: '#f2f2f2',
          200: '#d9d9d9',
          300: '#7f7f7f',
          400: '#333333',
          500: '#262626',
          600: '#191919',
          700: '#0d0d0d'
        },
      }
    },
  },
  plugins: [],
}


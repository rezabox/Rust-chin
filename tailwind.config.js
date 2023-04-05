/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
          'green-shad': '#00d084',
          'green-oil': '#8ed557',
          'color-sub-title':'#6d6d6d',
          'down-title':'#3c4354',
      }
    },
  },
  plugins: [],
}


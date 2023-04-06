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
          'color-input':'#6a6a6a',
          'nav-color': '#abb8c3',
          'hoverSearch-color':'rgba(100,207,76,.94)',
          'color-selectBox':'#c9c9c9',
          'back-selectBox':'#f1f1f1;',
      },
      boxShadow: {
          'shadowInput':'0 5px 25px rgba(0,0,0,.1)',
          'shadowSearch':'0 5px 15px rgba(126,207,66,.34)',
      }
    },
  },
  plugins: [],
}


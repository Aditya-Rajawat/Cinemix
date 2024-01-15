/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: 
      {
        "200" : "2.00",
        "500":"5.00"
      },
      zIndex:{
        '100':'100',
        '200':'200'
      }
    },
    screens: {
      'md': '1268px',
      'md1': '1024px'
    },
    plugins: [],
  },
};
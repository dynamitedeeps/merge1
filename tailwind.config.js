/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {mob : {max : "500px"} , tab : {max : "900px"}, "4k" : {max : "1920px"} },
      colors : {
        primary : "#E8E51A",
       secondary : "#000" 
      },
      // font size 
      fontSize:{
         h1: ['32px', {lineHeight: '42px', weight: '700'}],
      subtitle1: ['14px', {lineHeight: '16px', weight: '400'}],
      },
     


    fontFamily: {
      ubuntu: 'Ubuntu, sans-serif',
    },
    },
  },
  plugins: [],
}
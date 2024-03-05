/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./build/script/main.js'],
  theme: {
    extend: {},
    screens: {
  'xs': '320px',
  'sm': '640px',
  'md': '768px', 
  'lg': '1024px',
  'xl': '1280px', 
},
  },
  plugins: [],
  darkMode:"class",
};


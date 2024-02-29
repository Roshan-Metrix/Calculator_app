/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
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
}


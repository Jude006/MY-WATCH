/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#000000',
        secondary: '#1F2937',
        tertiary: '#00296B'
      }
    },
    fontFamily:{
      mont: ['Montserrat', 'sans-serif'],
      outfit:['Outfit','Sans'],
      
    },
    container:{
      center: true,
    }
  },
  plugins: [],
}
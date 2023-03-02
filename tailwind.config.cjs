/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'stars': 'url("/src/assets/background-stars.svg")'
      }
    },
    fontFamily: {
      'Antonio': ['Antonio', 'sans-serif'],
      'LeagueSpartan': ['League Spartan', 'sans-serif']
    },
    colors: {
      active: '#419EBB',
      Mercury: '#419EBB',
      Venus: '#EDA249',
      Earth: '#6D2ED5',
      Mars: '#D14C32',
      Jupiter: '#D83A34',
      Saturn: '#CD5120',
      Uranus: '#1EC1A2',
      Neptune: '#2D68F0'

    }
  },
  plugins: [],
}
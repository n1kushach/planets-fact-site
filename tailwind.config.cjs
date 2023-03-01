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
      active: '#419EBB'
    }
  },
  plugins: [],
}
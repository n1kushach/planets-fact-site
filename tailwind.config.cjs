/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
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
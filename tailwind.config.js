/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./app.js"
  ],
  theme: {
      extend: {
          colors: {
              luxuryBlack: '#121212',
              luxuryCharcoal: '#1C1C1C',
              luxuryWarmIvory: '#FAF9F6',
              luxurySoftIvory: '#F5F5F0',
              luxuryBeige: '#E8DCC4',
              luxuryNude: '#DFCBB5',
              luxuryGold: '#D4AF37',
          },
          fontFamily: {
              serif: ['"Playfair Display"', 'serif'],
              sans: ['"Plus Jakarta Sans"', 'sans-serif'],
          }
      }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gray1: '#7A7A7A',
      },
      fontFamily: {
        'damion': ['Damion', 'sans-serif'] 
      },
      spacing: {
        '13': '3.25rem',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
        '160': '40rem'
      },
      backgroundImage: {
        'hero': "url('../public/images/photos/bg-wide-final-1440p-no-fg.png')",
        'hero-toplayer': "url('../public/images/photos/nobg-wide-final-1440p.png')"
      },
    },
  },
  plugins: [],
}

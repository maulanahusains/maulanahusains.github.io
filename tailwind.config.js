/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      colors: {
        bkg: '#F0F0F0', // putih
        primary: '#213555', // navy
        secondary: '#4F709C', // biru rada ke navy
        darkersecondary: '#3f5a7d', // biru rada ke navy pas hover
        accent: '#E5D283' // yellow
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },
      fontSize: {
        title: `2.6rem;`,
        paragraph: `1rem;`
      },  
    },
  },
  plugins: [],
}


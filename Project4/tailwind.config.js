/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      // Some useful comment
      fontFamily: {
        'barlow': ['Barlow', 'sans-serif']// Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  plugins: [],
}


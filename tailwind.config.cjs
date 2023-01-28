/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      xl: '1440px',
    },
    extend: {
       colors: {
            darkGray: "#242424",
            verydarkGray: "#1a1a1a",
            darkPurple: "#9499ff"},},
  },
  plugins: [],
}

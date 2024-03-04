/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {
  theme: {
    fontFamily: {
      'sans': [your_main_font],
      'roboto': ['Roboto', 'sans-serif'],
    }
  }
}
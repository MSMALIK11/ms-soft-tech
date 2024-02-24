/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#684DF4',
        textColor: '#141D38',
        bodyColor: '#737887',
        light: '#72849B',
        smoke: '#E2E8FA'
      }
    },
  },
  plugins: [],
}
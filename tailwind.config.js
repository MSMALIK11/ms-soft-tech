/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "primary": '#111111',
        "secondary": '#161C22',
        textColor: '#141D38',
        bodyColor: '#737887',
        light: '#72849B',
        smoke: '#E2E8FA',
        dark: "#111111",
        brand: "#0D47D5",
        info: '#073158',
        btnHover: '#ECF9FF',
      }
    },
  },
  plugins: [],
}
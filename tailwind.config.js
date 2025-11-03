/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        marathi: ['"Noto Sans Devanagari"', "sans-serif"],
      },
      colors: {
        primary: "#6B8E23", // green
        secondary: "#A3C585",
        accent: "#D4AF37",
        // background: "#F9F7F1",
      },
    },
  },
  plugins: [],
}

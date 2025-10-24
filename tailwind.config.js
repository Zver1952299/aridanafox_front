/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myOrange: "#2D3B00",
        purpleMystic: "#4B0082",
        accentGold: "#FFD700",
        textLight: "#EDE9FE",
        shadowMystic: "#2D2D4A",
      },
      fontFamily: {
        jura: ["Jura", "sans-serif"],
      },
    },
  },
  plugins: [],
};

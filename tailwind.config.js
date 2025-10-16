/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        myOrange: "#2D3B00",
        purpleMystic: "#4B0082",
        accentGold: "#FFD700",
        textLight: "#EDE9FE",
        shadowMystic: "#2D2D4A",
      },
    },
  },
  plugins: [],
};

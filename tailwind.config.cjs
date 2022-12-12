/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange : "#fb7413",
        white : "#fff",
        lightGray: "#959eac",
        mediumGray: "#7c8798",
        veryLightGray : "rgba(124, 135, 152, .1)",
        darkBlue : "#252d37",
        veryDarkBlue : "#121417"
      },
     screens: {
      md: "768px"
     } 
    },
  },
  plugins: [],
}

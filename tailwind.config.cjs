/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors :{
      "terra": "#D87D4A",
      "terra-light":"#fbaf85",
     "light-black":"#191919",
      "black":"black",
      "white":"white",
      "grey":"#f1f1f1",
      "light-grey": "#fafafa"
    },
    extend: {
      screens: {
        "xy": "530px"
        // => @media (min-height: 800px) { ... }
      }
    },
  },
  plugins: [],
}
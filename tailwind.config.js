/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        base: "73.125rem",
      },
      colors: {
        brand: {
          blue: "#75C9B6",
          darkgreen: {
            100: "#38493E",
            200: "#404C3C",
          },
          white: {
            100: "#FFFFFF",
            200: "#F8F8F8",
          },
          darkslate: "#353640",
          orange: "#E47249",
          black: "#000000",
          garay: {
            100: "#E8E2D3",
            200: "#7C836A",
            300: "#363E44",
          },
          pink: "#E8E2D3",
          yellow: "#FCE467",
        },
      },
      fontFamily: {
        dmdisplay: ["DM Serif Display", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
      },
    },
  },
  plugins: [],
};
// #7C836A"

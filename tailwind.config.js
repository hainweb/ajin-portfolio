/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the src folder
    "./public/index.html",        // Include the index.html file
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite IS"', 'sans-serif'], // Font 1
        rubikVinyl: ['"Rubik Vinyl"', 'cursive'], // Font 2
        Audiowide: ['"Audiowide"', 'sans-serif'],
        Bungee: ['"Bungee Shade"', 'sans-serif'],
        nosifer: ['"Nosifer"', 'sans-serif'],
        eagle: ['"Eagle Lake"', 'cursive'],
        one: ['"Leckerli one"', 'cursive'],
        
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out',
        'fade-in-down': 'fade-in-down 0.8s ease-out',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      const allColors = flattenColorPalette(theme("colors"));
      const colorVariables = Object.fromEntries(
        Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
      );
      addBase({
        ":root": colorVariables,
      });
    },
  ],
};


/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    './src/**/*.{html,js,svelte,ts}',
  ],
  theme: {
    fontFamily: {
      monospace: ['Sono Monospace', 'sans-serif'],
      display: ['Fredoka One', 'cursive'],
    },
    extend: {
    },
    colors: {
      light: {
        50: "#f6edef",
        100: "#eddbde",
        200: "#e4c8ce",
        300: "#dbb6bd",
        400: "#d3a4ad",
        500: "#ca929c",
        600: "#c1808c",
        700: "#b86d7b",
        800: "#af5b6b",
        900: "#a6495a"
      },

      dark: {
        50: "#e8e8e9",
        100: "#d1d1d4",
        200: "#bbbabe",
        300: "#a4a3a8",
        400: "#8d8c93",
        500: "#76747d",
        600: "#5f5d67",
        700: "#494651",
        800: "#322f3c",
        900: "#1b1826"
      }
    },

  },
  plugins: [],
}

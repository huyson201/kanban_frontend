/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-bg": "#292929",
        "on-sidebar": "#e4e4e4",
        "on-sidebar-hover": "#383838",
        "board-bg": "#212121",
        "on-board": "#e4e4e4",
        "sidebar-track": "#424242",
        "sidebar-thumb": "#5b5b5b",
        "sidebar-thumb-hover": "#7b7b7b"
      },
      fontFamily: {
        "poppins": "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}
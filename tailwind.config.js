/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#A7B6FA",
          500: '#3E60F4',
        },
        secondary: "#47C887",
        superior: "#232F3E",
        immediate: "#131A22",
        white: "#FFFFFF",
        gray: {
          300: "#626060"
        }
      },
    },
  },
  plugins: [],
};

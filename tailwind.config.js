/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#5BFAEA",
          100: "#47F9E8",
          200: "#20F8E3",
          300: "#08E7D2",
          400: "#06C0AE",
          500: "#05988A",
          600: "#036259",
          700: "#012B27",
          800: "#000000",
          900: "#000000",
        },
      },
    },
  },
  plugins: [],
};

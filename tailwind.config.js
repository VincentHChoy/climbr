/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'comfortaa': "'Comfortaa', cursive",
        'poppins': 'Poppins, sans-serif'
      },
      colors: {
        primary: "#5FCCE4",
        secondary: "#E86158",
        accent: "black",
      },
      
    },
  },
  plugins: [],
};

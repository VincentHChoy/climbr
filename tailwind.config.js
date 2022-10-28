/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': "'Comfortaa', cursive",
        'poppins': 'Poppins, sans-serif',
        'roboto': 'Roboto, sans-serif'
      },
      colors: {
        primary: "#7586E6",
        secondary: "#5A6DE0",
        accent: "#1976d2",
      },
      
    },
  },
  plugins: [],
};

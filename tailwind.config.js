/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7B032D',
          light: '#A40740',
          dark: '#4E021C',
        },
        secondary: {
          DEFAULT: '#1D1D1D',
          light: '#3B3B3B',
          dark: '#0E0E0E',
        },
        accent: '#8F0C38',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
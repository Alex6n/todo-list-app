/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'azure-radiance': {
          '50': '#f0f7fe',
          '100': '#ddedfc',
          '200': '#c2e1fb',
          '300': '#98cff8',
          '400': '#68b4f2',
          '500': '#4495ed',
          '600': '#3b81e3',
          '700': '#2663cf',
          '800': '#2552a8',
          '900': '#234785',
          '950': '#1a2d51',
        },
      }
    },
  },
  plugins: [],
}


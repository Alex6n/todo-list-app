/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'azure-radiance': {
          '50': '#f8f8fa',
          '100': '#f2f1f6',
          '200': '#e6e5ef',
          '300': '#d2d0e2',
          '400': '#bab5d0',
          '500': '#948bb4',
          '600': '#8a7ea9',
          '700': '#786b96',
          '800': '#655a7d',
          '900': '#544b67',
          '950': '#363045',
          'urgent': '#cf3333',
          'pressing': '#ee6f31',
          'strategic': '#3f9cf2', // or 2584d2
          'optional': '#4db52d',
          
        },
      }
    },
  },
  plugins: [],
}


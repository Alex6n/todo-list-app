/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    extend: {
      colors: {
        'azure-radiance': {
          '50': '#f9fbfb',
          '100': '#ecf2f2',
          '200': '#d5e2e1',
          '300': '#b0c9c7',
          '400': '#85aba8',
          '500': '#66918d',
          '600': '#517875',
          '700': '#426260',
          '800': '#395352',
          '900': '#334746',
          '950': '#222f2f',
          'urgent': '#cf3333',
          'pressing': '#ee6f31',
          'strategic': '#3f9cf2', // or 2584d2
          'optional': '#4db52d'
        },
      }
    },
  },
  plugins: [
    require('@headlessui/tailwindcss')({ prefix: 'ui' })
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto, sans-serif'
      }
    },
    screens: {
      rip: '768px'
    },
    plugins: []
  }
}

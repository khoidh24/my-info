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
      md: { raw: '(min-height: 50vh)' }
    }
  },
  plugins: []
}

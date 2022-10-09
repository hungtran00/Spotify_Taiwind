/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        'screen-header-player': 'calc(100vh - 6rem - 6rem)'
      }
    },
  },
  plugins: [],
}

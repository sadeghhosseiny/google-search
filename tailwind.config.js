module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '1.5xl': { 'max': '1300px' },
        '1.5lg': { 'max': '1130px' }
      }
    },
  },
  plugins: [],
}
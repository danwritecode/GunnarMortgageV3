module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('~/assets/img/testing_background.svg')",
        'webb-pattern': "url('~/assets/img/webb.png')",
        'dot-pattern': "url('~/assets/img/dot-grid.png')"
      },
      colors: {
        turq: {
          50: '#ecfffd',
          100: '#e4fefb',
          200: '#dcfcf9',
          300: '#d3fbf7',
          400: '#cbf9f4',
          500: '#c2f8f2',
          600: '#93ccc5',
          700: '#66a29b',
          800: '#3a7a72',
          900: '#00544b',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms')
  ],
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'nicolaudie-first': '#382d3d',
        'nicolaudie-second': '#4ddbc3',
        'nicolaudie-third': '#2c2334',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

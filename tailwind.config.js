/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bgDark': '#111',
      'bgWhite': '#f9f9ff',
      'txt-white': '#fff',
      'txt-black': '#111',
      'bgBookList': '#e2fdf5',
    },
    fontFamily: {
      'Gabarito': 'Gabarito',
    },
    flex: {
      'flex': 1,
      'flex2': 2,
    },
  },
  plugins: [],
}


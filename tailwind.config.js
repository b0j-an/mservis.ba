/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'red-primary': '#D70018',
        'red-dark': '#A50014',
        'red-light': '#FFF1F3',
      },
      fontFamily: {
        'sans': ['-apple-system', 'BlinkMacSystemFont', '"SF Pro Display"', '"SF Pro Text"', '"Segoe UI"', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

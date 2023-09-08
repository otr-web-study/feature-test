/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'header-bg': "url('/assets/images/header-bg.jpg')",
      },
      colors: {
        focused: 'rgb(38, 132, 255)',
      },
      boxShadow: {
        shadow: '0px 0px 15px 0px rgba(0, 0, 0, .15)',
      },
      borderRadius: {
        radii: '6px',
      },
    },
  },
  plugins: [],
};

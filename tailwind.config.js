/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neutralSilver': '#F5F7FA',
        'neutralDGrey': '#4D4D4D',
        'brandPrimary': '#4CAF4F',
        'gray900': '#717171',
        'silverPrimary': '#E1E1E1',
      },
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        jollyLodger: ['"Jolly Lodger"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
        dmSans: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

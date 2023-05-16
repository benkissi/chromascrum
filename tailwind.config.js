/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        passion: ['"Passion One"', "cursive"],
        albert: ['"Albert Sans"', "sans-serif"],
      },
    },
  },

  plugins: [],
};

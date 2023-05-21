/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const myUtils = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

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

  plugins: [myUtils],
};

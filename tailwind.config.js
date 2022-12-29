/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 7s infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(-12px) rotate(20deg)" },
          "33%": { transform: "translateY(18px) rotate(0deg)" },
          "100%": { transform: "translateY(-12px) rotate(20deg)" },
        },
      },
    },
    plugins: [],
  },
};

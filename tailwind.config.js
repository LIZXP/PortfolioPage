/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 7s infinite",
        bubble: "bubble 15s linear infinite",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(-12px) rotate(20deg)",
            timingFunction: "ease-in",
          },
          "33%": {
            transform: "translateY(18px) rotate(0deg)",
            timingFunction: "ease-out",
          },
          "100%": {
            transform: "translateY(-12px) rotate(20deg)",
            timingFunction: "ease-in-out",
          },
        },
        bubble: {
          "0%": { transform: "translateY(100vh) scale(0)" },
          "100%": { transform: "translateY(-10vh) scale(1)" },
        },
      },
    },
    plugins: [],
  },
};

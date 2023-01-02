/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 9s infinite",
        space: "space 9s ease-in-out infinite",
        leaf: "leaf 4s linear infinite;",
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
        space: {
          "0%": {
            transform: "translateY(0%)",
          },
          "50%": {
            transform: "translateY(-5%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
        leaf: {
          "0%": {
            transform: "translateX(-100%) translateY(0%)",
          },
          "50%": {
            transform: "translateX(100%) translateY(-10%)",
          },
          "100%": {
            transform: "translateX(-100%) translateY(0%)",
          },
        },
      },
    },
    plugins: [],
  },
};

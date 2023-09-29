/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 15s infinite",
        space: "space 9s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0px) rotate(0deg)",
          },
          "16.5%": {
            transform: "translateY(-12px) rotate(20deg)",
          },
          "33%": {
            transform: "translateY(18px) rotate(0deg)",
          },
          "50%": {
            transform: "translateY(-12px) rotate(20deg)",
          },
          "66.5%": {
            transform: "translateY(18px) rotate(0deg)",
          },
          "83%": {
            transform: "translateY(-12px) rotate(20deg)",
          },
          "100%": {
            transform: "translateY(0px) rotate(0deg)",
          },
        },
        space: {
          "0%": {
            transform: "translateY(0%)",
          },
          "50%": {
            transform: "translateY(-6%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },
      },
    },
    plugins: [require("tailwind-scrollbar-hide")],
  },
  mode: "jit",
};

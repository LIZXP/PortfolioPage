/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 7s infinite",
        floatTwo: "floatTwo 7s infinite",
        floatThree: "floatThree 7s infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0px,0px)" },
          "33%": { transform: "translate(0px,-20px)" },
          "66%": { transform: "translate(-10px,30px)" },
          "100%": { transform: "translate(0px,0px)" },
        },
        floatTwo: {
          "0%": { transform: "translate(0px,0px)" },
          "33%": { transform: "translate(0px,-10px)" },
          "66%": { transform: "translate(-40px,15px)" },
          "100%": { transform: "translate(0px,0px)" },
        },
        floatThree: {
          "0%": { transform: "translate(0px,0px)" },
          "33%": { transform: "translate(0px,-10px)" },
          "66%": { transform: "translate(-10px,40px)" },
          "100%": { transform: "translate(0px,0px)" },
        },
      },
    },
    plugins: [],
  },
};

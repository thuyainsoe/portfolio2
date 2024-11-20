/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#282C33",
        lavender: "#C778DD",
        grayish: "#ABB2BF",
      },
      screens: {
        llg: "919px",
        xll: "1353px",
      },
    },
  },
  plugins: [],
};

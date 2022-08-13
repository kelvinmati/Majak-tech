/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{react,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        mobile: "95%",
        container_width: "85%",
      },
      colors: {
        mainGreen: "#0B4619",
        hoverColor: "#116530",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      white: "#fff",
      "secondary-gray": "#4040406f",
      "indent-gray": "#d1d1d1",
    },
    extend: {
      backgroundImage: {
        "header-gradient": "linear-gradient(90deg, #000, #05080f, #000)",
        "page-gradient":
          "radial-gradient(22% 48% at 50% -3%, #d21c5ffd -85%, #000)",
      },
    },
  },
  plugins: [],
};

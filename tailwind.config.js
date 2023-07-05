/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      colors: {
        "maximum blue green": "#2ad0d0",
        "night blue": "#3a3054",
        bittersweet: "#f46262",
        "x11 gray": "#bfbfbf",
        manatee: "#9e9aa8",
        onyx: "#35323e",
        "raisin black": "#232127",
      },
    },
  },
  plugins: [],
};

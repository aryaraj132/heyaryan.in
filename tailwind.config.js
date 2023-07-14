module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      sans: ['"Jost"', "sans-serif"],
    },
    extend: {
      colors: {
        bglight: "#F9FAFB",
        marrslight: "rgb(180, 0, 0)",
        darkred: "rgb(140, 0, 0)",
        marrsdark: "rgb(120, 0, 0)",
        cardlight: "#EFF3F3",

        // bgdark: "#2D2D2D",
        bgdark: "#1D2A35",
        carrilight: "rgb(255, 0, 0)",
        lightred: "rgb(220, 0, 0)",
        carridark: "rgb(210, 0, 0)",
        // carddark: "#383838",
        carddark: "#22323F",
        textlight: "#F9FAFB",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};

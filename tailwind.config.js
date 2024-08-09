/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html", "./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
        caskaydia: ["caskaydiacove nf"],
      },
      colors: {
        tokyonight: {
          bg: "#1e2030",
          fg: "#c7d2f4",
          dark: {
            black: "#393b54",
            red: "#f88199",
            green: "#a8d475",
            yellow: "#e4b873",
            blue: "#85acf8",
            purple: "#b699e9",
            cyan: "#4da7b4",
            white: "#8387a3",
          },

          light: {
            black: "#4d5575",
            red: "#ff859d",
            green: "#c1f487",
            yellow: "#ffa86f",
            blue: "#88afff",
            purple: "#c3a4f8",
            cyan: "#09c1dc",
            white: "#b5b9d6",
          },
        },
      },
    },
  },
  plugins: [],
};

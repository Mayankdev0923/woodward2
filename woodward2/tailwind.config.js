/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        MTreg: ["MTreg"],
        NBI: ["NantesBoldItalic"],
      },

      colors :{
        greenish : "#DCE4C9",
        darkgreen: "#A5B68D",
        peachish : "#FAF7F0",
        brownish : "#B6A28E",
        ltgreen : "#ebe9d9",
        cent : "#4A4947",
        dkbrown : "#674636",
        dkkbrown : "#493628",
      }
    },
    
  },
  plugins: [],
};

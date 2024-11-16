/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      animation: {
        slideIn: 'slideIn 1.0s ease-in-out forwards',
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },

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

/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            secondFont: ["Saira"],
         },
         colors: {
            "main-bg": "#080808",
            "main-white": "#eeeeee",
            "main-orange": "#EB510A",
         },
         width: {
            124: "30rem",
         },
         height: {
            124: "30rem",
         },
         backgroundSize: {
            "size-200": "200% 200%",
         },
         backgroundPosition: {
            "pos-0": "0% 0%",
            "pos-100": "100% 100%",
         },
         animation: {
            "type": "type 2s steps(40,end) forwards",
            "bounce-slow":
               "bounceSlow 4s  forwards infinite",
         },
         keyframes: {
            type: {
               "0%": { width: "0", lineHeight: "0" },
               "1%, 99%": {
                  borderRight: "1px solid orange",
               },
               "100%": {
                  borderRight: "none",
               },
            },
            bounceSlow: {
               "0%": {
                  transform: "translateY(-5px)",
               },
               "50%": {
                  transform: "translateY(10px)",
               },
               "100%": {
                  transform: "translateY(-5px)",
               },
            },
         },
      },
   },
   plugins: [],
};

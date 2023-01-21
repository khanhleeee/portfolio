/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            robot: ['Chakra Petch'],
         },
         colors: {
            'main-bg': '#090012',
            'main-purple': '#2a004a',
            'main-blue': '#38278c',
            'main-pink': '#7e2d7d',
            'html-red': '#e34e26',
            'react-blue': '#26c7fe',
            'js-yellow': '#f2cd33',
            'bs-purple': '#8512f4',
            'mg-green': '#00db5d',
            'or-red': '#c84936',
         },
         width: {
            124: '30rem',
         },
         height: {
            124: '30rem',
         },
         keyframes: {
            wiggle: {
               '0%, 100%': { transform: 'rotate(-3deg)' },
               '50%': { transform: 'rotate(3deg)' },
            },
         },
         animation: {
            wiggle: 'wiggle 1s ease-in-out infinite',
         },
         backgroundSize: {
            'size-200': '200% 200%',
         },
         backgroundPosition: {
            'pos-0': '0% 0%',
            'pos-100': '100% 100%',
         },
      },
   },
   plugins: [],
};

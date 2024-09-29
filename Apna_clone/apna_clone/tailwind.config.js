/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
    colors: {
    //  'gray': '#f4f2f6',
      'gray': '#f4f9fe',
    //  'green': '#1f8268',
      'green':'#002D8A',
     'darkgreen':'#00422c',
    //  'graynav':'#8C8594',
     'graynav':'#1E2761',
     'dark':'#190a28',
     'white': '#fff',
     'graylight':'#e4e4e4',
     'grayw' : '#585858',
     'light': '#E9ECF5',
     'darklight':'#414B5D',
    //  'violet' : '#190a28',
     'violet' : '#1E2761',
     'black' : '#000000',
     'login' : '#172b4d',
     'blue' : '#0074e8',
     'greenhover':'#005f3e',
     'footergray':'#0003',
    //  'darkviolet':'#4d3951',
     'darkviolet':'#1E2761',
    //  'lightgreen':'#1eb892',
     'lightgreen':'#03ACEE',
     'serachtitle':'#6b7c8f',
     'contactbg':'#CADCFC'
    },

    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '992px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      
    }
  },
  plugins: [],
}


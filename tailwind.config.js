/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/web/**/*.{ejs,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'Rubik': ['Rubik', 'sans-serif']
    },
    colors: {
      'text': {
   50: '#f1ecf9',
   100: '#e3d9f2',
   200: '#c7b3e6',
   300: '#ab8cd9',
   400: '#8f66cc',
   500: '#7340bf',
   600: '#5c3399',
   700: '#452673',
   800: '#2e194d',
   900: '#170d26',
   950: '#0b0613',
 },
 'background': {
   50: '#f0ecf9',
   100: '#e1d9f2',
   200: '#c4b3e6',
   300: '#a68cd9',
   400: '#8866cc',
   500: '#6a40bf',
   600: '#553399',
   700: '#402673',
   800: '#2b194d',
   900: '#150d26',
   950: '#0b0613',
 },
 'primary': {
   50: '#f0ecf8',
   100: '#e2d9f2',
   200: '#c5b3e5',
   300: '#a78dd8',
   400: '#8a67cb',
   500: '#6d41be',
   600: '#573498',
   700: '#412772',
   800: '#2c1a4c',
   900: '#160d26',
   950: '#0b0713',
 },
 'secondary': {
   50: '#f8ecee',
   100: '#f2d9dc',
   200: '#e5b3ba',
   300: '#d88d97',
   400: '#cb6774',
   500: '#be4152',
   600: '#983441',
   700: '#722731',
   800: '#4c1a21',
   900: '#260d10',
   950: '#130708',
 },
 'accent': {
   50: '#f8f0ec',
   100: '#f2e1d9',
   200: '#e5c2b3',
   300: '#d8a48d',
   400: '#cb8567',
   500: '#be6741',
   600: '#985234',
   700: '#723e27',
   800: '#4c291a',
   900: '#26150d',
   950: '#130a07',
 },
 
},

  },
  plugins: [
    
  ],
}
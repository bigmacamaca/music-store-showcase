/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {  
    extend: {
      colors: {
        'text-black': '#130e01',
        'background': '#fffaeb',
        'primary': '#ff8400',
        'secondary': '#fff5d6',
        'accent': '#cf4307',
       },
    },
  },
  plugins: [],
}


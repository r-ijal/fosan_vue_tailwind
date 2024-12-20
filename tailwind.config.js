/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#343433',
        secondary: '#e69b23',
        bitdark: '#575554',
        bitlight: '#b8b4b4',
        bityellow: '#e79b23c0',
        bitkrim: '#f9e2c2',
        darkone: '#1a1a1a',
        darktwo: '#242424',
        lightone: '#ffffff',
        lighttwo: '#f9f9f9',
      },
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'false',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: '#945EB3',
        surfacev2: '#e8e2f8',
        button: '#68217A',
        minSurface: '#B68FD7',
        lightSurface: '#D9C2E9',
        light: '#fff',
        dark: '#252525',
      },
    },
  },
  plugins: [],
}

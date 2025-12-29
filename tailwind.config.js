/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'della-respira': ['Della Respira', 'sans-serif'],
        'lisu-bosa': ['Lisu Bosa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

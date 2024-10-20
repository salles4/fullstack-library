/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //overall default layout
    extend: {
      fontFamily: {
        sans:["Poppins", "sans-serif"]
      },
      container:{
        color:{
          lightOrange: "#f1dabf",
        },
        center: true,
        padding:{
          default: "1rem",
          sm:"2rem",
        }
      }
    },
  },
  plugins: [],
}


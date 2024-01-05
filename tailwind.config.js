/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        128: "70vh"
      }, 
      minWidth: {
        '25%': '25%',
      }
    },
    screens: {
      phone890: {
        max: "890px"
      },
      phone1000: {
        max: "1000px"
      }
    }
  },
  plugins: [],
}


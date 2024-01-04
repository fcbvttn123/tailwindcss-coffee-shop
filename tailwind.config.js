/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        128: "30rem"
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


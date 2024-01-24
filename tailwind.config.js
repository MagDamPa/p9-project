/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      
    },
    
    extend: {
      maxWidth: {
        'half': '50%',
      }
    },
  },
  plugins: [require("daisyui")],
}


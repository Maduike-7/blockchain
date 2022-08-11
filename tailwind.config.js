/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
           'topbackground': "url('/images/topbackground.png')",
           'footer-texture': "url('/img/footer-texture.png')",
                })
    },
  },
  plugins: [],
}

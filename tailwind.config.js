/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
           'topbackground': "url('/images/home-hero-gradient.svg')",
           'nav-backgroun': "url('/img/footer-texture.png')",
                })
    },
  },
  plugins: [],
}

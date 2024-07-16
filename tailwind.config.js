/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'banner-img': "linear-gradient(rgba(225, 0, 0, 0.7),rgba(0, 0, 0, 0.3)),url('../images/events-heavenly-header.jpg');",
        'count-img': "linear-gradient(rgba(225, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),url('../images/count-down.jpg');"
      },
    },
  },
  plugins: [],
}


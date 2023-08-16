/** @type {import('tailwindcss').Config} */
export default {
  // content: ["./src/**/*.{html,js}"],
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      'inter': ['Inter'],
      'montserrat': ['Montserrat']
    },
    colors: {
      'green': '#1B5B31',
      'cream': '#dcc1ab',
      'creamHover': '#dcc1ab91',
    },
    extend: {},
  },
  plugins: [],
}


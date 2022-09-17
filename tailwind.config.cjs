/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

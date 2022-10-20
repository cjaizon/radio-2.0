/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'body': 'repeat(auto-fit, minmax(15rem, max-content))',
      },
      colors: {
        'radio': 'rgba(255, 255, 255, 0.164)',
      },
      boxShadow: {
        'radio-shadow': ['2px 2px 4px rgb(211, 211, 211)', '-2px -2px 4px rgb(255, 255, 255)'],
        'radio-hover': ['1px 1px 5px rgb(212, 222, 255)', ' -1px -1px 5px rgb(255, 206, 212)'],
      }
    }
  },
  plugins: []
};
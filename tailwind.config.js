/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        default: {
          primary: '#D90429',

          secondary: '#FFB703',

          accent: '#c9b5f2',

          neutral: '#22192e',

          'base-100': '#fcfcfd',

          info: '#a3cdef',

          success: '#1fc76a',

          warning: '#fcb127',

          error: '#e02453',
        },
      },
      'light',
      'dracula',
      'bumblebee',
      'dark',
      'cupcake',
    ],
  },
};

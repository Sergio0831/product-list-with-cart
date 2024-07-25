/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: 'var(--white)',
      black: 'var(--black)',
      red: 'var(--red)',
      'dark-red': 'var(--dark-red)',
      green: 'var(--green)',
      background: 'var(background)',
      ring: 'var(--ring)',
      rose: {
        50: 'var(--rose-50)',
        100: 'var(--rose-100)',
        300: 'var(--rose-300)',
        400: 'var(--rose-400)',
        500: 'var(--rose-500)',
        900: 'var(--rose-900)',
      },
    },
    extend: {},
  },
  plugins: [],
};

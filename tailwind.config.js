/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      onyx: '#343e3dff',
      'hookers-green': '#607466ff',
      celadon: '#aedcc0ff',
      flame: '#cf5c36ff',
      'persian-orange': '#d38b5dff',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


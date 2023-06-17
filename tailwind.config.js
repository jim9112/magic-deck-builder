/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      onyx: '#343e3dff',
      'hookers-green': '#607466ff',
      vanilla: '#f1e8b8ff',
      flame: '#cf5c36ff',
      'persian-orange': '#d38b5dff',
      white: '#FFFFFF',
    },
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  screens: {
    'sm': '640px',
    // => @media (min-width: 640px) { ... }

    'md': '768px',
    // => @media (min-width: 1024px) { ... }

    'lg': '1280px',
    // => @media (min-width: 1280px) { ... }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

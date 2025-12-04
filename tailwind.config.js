/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#11171A',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#F5F5F5',
          foreground: '#11171A',
        },
        accent: {
          DEFAULT: '#D4AF37',
          foreground: '#11171A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
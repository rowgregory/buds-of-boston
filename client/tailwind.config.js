/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Paytone-One': ['"Paytone One"', 'sans-serif'],
      },
      backgroundImage: {
        'g-code': 'linear-gradient( -45deg, #bd34fe 50%, #47caff 50%)',
      },
      animation: {
        fadeIn: 'fadeIn 500ms ease-in-out',
      },
      keyframes: () => ({
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      }),
    },
  },
  plugins: [],
}


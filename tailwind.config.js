/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          950: '#070403',
          900: '#0c0705',
          850: '#140b07',
          800: '#1d100a',
          700: '#2c1710',
        },
        crema: {
          50: '#fff8ed',
          100: '#f5ead8',
          200: '#dfc8a6',
        },
        gold: {
          300: '#e8c878',
          400: '#d7a84d',
          500: '#b77a2e',
        },
        clay: {
          400: '#b86643',
          500: '#8f462f',
        },
        smoke: {
          100: '#e6e0d7',
          300: '#a8a096',
          500: '#625b53',
          700: '#2f2b28',
        },
        mineral: {
          500: '#5f807b',
          700: '#314c48',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Avenir Next', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 70px rgba(215, 168, 77, 0.22)',
        glass: '0 24px 90px rgba(0, 0, 0, 0.35)',
        insetGold: 'inset 0 1px 0 rgba(255, 238, 192, 0.18)',
      },
      backgroundImage: {
        'paper-noise':
          'radial-gradient(circle at 20% 20%, rgba(232,200,120,0.10), transparent 32%), radial-gradient(circle at 80% 0%, rgba(95,128,123,0.10), transparent 30%), linear-gradient(135deg, rgba(255,248,237,0.04), rgba(255,248,237,0))',
      },
    },
  },
  plugins: [],
};

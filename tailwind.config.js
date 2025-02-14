/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#002975',
        lightPrimary: '#003D99',
        secondary: '#FF5722',
        accent: '#FF7043',
        footer: '#EBF2FF',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to bottom,rgb(254, 122, 82), #FFFFFF)',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      spacing: {
        '4': '1rem',
        '8': '2rem',
        '20': '5rem',
      },
    },
  },
  plugins: [],
  safelist: [
    'text-primary',
    'text-secondary',
    'text-accent',
    'bg-primary',
    'bg-secondary',
    'bg-accent',
    'hover:text-primary',
    'hover:text-secondary',
    'hover:text-accent',
    'from-hero-gradient-from',
    'to-hero-gradient-to'
  ]
} 
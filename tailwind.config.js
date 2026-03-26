/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0F4C81',
          50: '#E6F0F9',
          95: '#CCE1F3',
          200: '#99C3E7',
          300: '#66A5DB',
          400: '#3387CF',
          500: '#0F4C81',
          600: '#0C3D67',
          700: '#092E4D',
          800: '#061E34',
          900: '#030F1A',
        },
        "on-primary": "#ffffff",
        "primary-container": "#e0eaf3",
        "on-primary-container": "#0b2b4d",
        "secondary": "#4a627a",
        "on-secondary": "#ffffff",
        "secondary-container": "#f1f4f6",
        "on-secondary-container": "#37495a",
        "tertiary": "#2e5d8a",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#d6e4f0",
        "on-tertiary-container": "#1d3d5a",
        "background": "#ffffff",
        "on-background": "#1a1c1e",
        "surface": "#ffffff",
        "on-surface": "#1a1c1e",
        "surface-variant": "#e1e2e8",
        "on-surface-variant": "#44474e",
        "outline": "#74777f",
        "surface-container-low": "#f7f9fc",
        "surface-container": "#f1f4f6",
        "surface-container-high": "#ebeef2",
        "surface-container-highest": "#e5e9ed",
        "tertiary-fixed-dim": "#3b82f6"
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Inter", "sans-serif"],
        "label": ["Inter", "sans-serif"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "1rem",
        "full": "9999px"
      },
    },
  },
  plugins: [],
}
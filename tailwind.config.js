/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505", // Very deep black
        surface: "#0F0F0F",    // Slightly lighter black for cards
        primary: "#8B5CF6",    // Violet 500 - Main Purple
        secondary: "#A78BFA",  // Violet 400 - Lighter Purple
        accent: "#7C3AED",     // Violet 600 - Darker Purple
        text: {
          main: "#F3F4F6",     // Gray 100
          muted: "#9CA3AF",    // Gray 400
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blob-float': 'blob-float 15s infinite linear', // 1. กำหนดชื่อ animation
      },
      keyframes: {
        'blob-float': { // 2. กำหนดขั้นตอนการเคลื่อนที่
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '25%': { transform: 'translate(100px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-50px, 100px) scale(1.05)' },
          '75%': { transform: 'translate(50px, 50px) scale(0.95)' },
        },
      },
    },
  },
  plugins: [],
}




/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'kid-yellow': '#FFD93D',
        'kid-orange': '#FF6B35',
        'kid-blue': '#4ECDC4',
        'kid-purple': '#A855F7',
        'kid-pink': '#F472B6',
        'kid-green': '#10B981',
      }
    },
  },
  plugins: [],
}

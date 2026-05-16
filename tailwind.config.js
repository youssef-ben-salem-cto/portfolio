/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hugo_stats.json", "./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        zinc: {
          850: '#1f1f22',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
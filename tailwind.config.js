/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          deep: '#1E3A8A',
          blue: '#3B82F6',
          amber: '#F59E0B',
          bg: '#F8FAFC',
          text: '#1F2937',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 24px rgba(30, 58, 138, 0.08)',
        'card-hover': '0 8px 40px rgba(30, 58, 138, 0.15)',
      },
    },
  },
  plugins: [],
}

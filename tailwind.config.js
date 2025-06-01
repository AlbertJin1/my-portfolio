/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'soft-black': '#1C2526',
        'dark-gray': '#2E3532',
        'mid-gray': '#5C6B73',
        'light-gray': '#C2C8CC',
        'off-white': '#F5F6F5',
        'teal': '#A3BFFA',
      },
    },
  },
  plugins: [],
}
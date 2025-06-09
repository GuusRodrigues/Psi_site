/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/layout.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/page.tsx"
  ],
  theme: {
    extend: {
      colors: {
          primary: '#6C733C',
          background: '#ECE4D7',
          accent: '#D8A45B',
          neutral: '#99937B',
          soft: '#F2DBAE',
          beige: '#AAAA88',
          textbranco: '#FAFAFA',
      },
    },
  },
  plugins: [],
}
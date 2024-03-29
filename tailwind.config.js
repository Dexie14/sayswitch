/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // primary: "#941D3A",
        primary: "#1f8f4f",
        // secondary: "#FFEAEF",
        secondary: "#5ad68030",
        dark: "#4F4F4F",
        grayC: "#F2F2F2",
        border:"#BDBDBD"
      },
    },
  },
  plugins: [],
}

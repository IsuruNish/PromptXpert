/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "primary-orange": "#FAAE53",
        "blueish-one": "#005A8C",
        "blueish-text": "#0593e3",
        "tag-col": "#141414",
        "edit-btn": "#00C897",
        "delete-btn": "#FAAE53",
        "sign-in": "#FAF8FF",
      },
    },
  },
  plugins: [],
};

/** @type {import("tailwindcss").Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        "bubbles-img": "url('./src/assets/images/Bubbles.jfif')",
      },
    },
  },
  plugins: [],
};

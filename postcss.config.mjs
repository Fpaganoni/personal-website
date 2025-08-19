/** @type {import('postcss-load-config').Config} */
const config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

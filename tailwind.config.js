/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pomo-pink": "#DE4C4C",
        "pomo-pink-50": "#D29595",
        "pomo-button": "#EC7171",
      },
    },
  },
  plugins: [],
};

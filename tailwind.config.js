/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "text-Moirai-One": ['"Moirai One"', "system-ui"],
        "text-roboto": ['"Roboto"', "system-ui"],
      },
      screens: {
        'smallPhone' : { max: "360px" },
        'desktop': { min: "468px" },
      },
    },
  },
  plugins: [],
};

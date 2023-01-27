/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "cardShadow": "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        "productShadow":
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      },
    },
    screens: {
      "tablet": "600px",
      // => @media (min-width: 640px) { ... }

      "laptop": "1024px",
      // => @media (min-width: 1024px) { ... }

      "desktop": "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};

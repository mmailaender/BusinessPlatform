const { getTheme } = require("reshaped/config/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    ...getTheme(),
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        x12: "48px",
        x16: "64px",
        x24: "96px",
        x32: "128px",
        x48: "192px",
        x64: "256px",
        x96: "384px",
        x128: "512px",
        x160: "640px",
        x192: "768px",
      },
    },
  },
  plugins: [],
};

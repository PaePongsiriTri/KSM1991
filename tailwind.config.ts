import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f5f7fa",
          100: "#e4e9f2",
          200: "#c8d2e0",
          300: "#9caec5",
          400: "#6b85a6",
          500: "#46638a",
          600: "#334d72",
          700: "#27395a",
          800: "#1c2942",
          900: "#121b2c",
          950: "#0a1020",
        },
        accent: {
          DEFAULT: "#c9a96a",
          dark: "#a8884d",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
    },
  },
  plugins: [],
};

export default config;

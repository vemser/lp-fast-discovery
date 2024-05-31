import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-main": "#004BF5",
        "brand-darker": "#040C2C",
        "brand-dark": "#0F298E",
        "brand-light": "#6AA6FF",
        "gray-main": "#D2CFCF",
        "gray-darker": "#333333",
        "gray-dark": "#636363",
        "gray-light": "#F2F2F2",
        white: "#FFFFFF",
        "blue-bg": "#E9F2FF",
        "blue-dbc-bg": "#1E62FE",
        "modal-overlay": "rgb(1,6,26)",
        "btn-danger": "#BD2730",
        "hero-img-gradient":
          "linear-gradient(65.81deg, #01061A -8.06%, rgba(4, 12, 44, 0.07) 98.01%)",
      },
      boxShadow: {
        "card-shadow": "1px 1px 8px 0px rgba(0, 0, 0, 0.16);",
      },
      fontFamily: {
        inter: ["Inter", "sansoserif"],
      },
      fontSize: {
        h1: "56px",
        h2: "48px",
        h3: "40px",
        h4: "32px",
      },
      fontWeight: {
        "custom-500": "500",
        "custom-600": "600",
        "custom-700": "700",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      gridTemplateColumns: {
        "cards-galery-lg": "repeat(3, minmax(327px, 409px))",
        "cards-galery-md": "repeat(2, minmax(327px, 409px))",
        "cards-galery-sm": "repeat(1, minmax(327px, 409px))",
      },
    },
  },
  plugins: [],
};
export default config;

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
        "neutral-50": "#F7F7F7",
        "neutral-100": "#E2E3E5",
        "neutral-200": "#C6C7CB",
        "neutral-300": "#A9ACB1",
        "neutral-400": "#8D9097",
        "neutral-500": "#70747D",
        "neutral-600": "#5A5D64",
        "neutral-700": "#43464B",
        "neutral-800": "#2D2E32",
        "neutral-900": "#161719",
        "main-50": "#FEECEF",
        "main-100": "#FDD8DF",
        "main-200": "#FBB1BF",
        "main-300": "#F88AA0",
        "main-400": "#F66380",
        "main-500": "#F43C60",
        "main-600": "#C3304D",
        "main-700": "#92243A",
        "main-800": "#621826",
        "main-900": "#310C13",
      },
      fontSize: {
        title3: [
          "24px",
          {
            fontWeight: "700",
            lineHeight: "33.6px",
          },
        ],
        heading: [
          "18px",
          {
            fontWeight: "700",
            lineHeight: "25.56px",
          },
        ],
        label: [
          "14px",
          {
            fontWeight: "500",
            lineHeight: "17.5px",
          },
        ],
        caption: [
          "12px",
          {
            fontWeight: "600",
            lineHeight: "14.4px",
          },
        ],
        bodyBold: [
          "16px",
          {
            fontWeight: "700",
            lineHeight: "24px",
          },
        ],
        bodyRegular: [
          "16px",
          {
            fontWeight: "400",
            lineHeight: "24px",
          },
        ],
      },
      fontFamily: {
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
};
export default config;

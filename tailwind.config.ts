import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        onyx: "#121212",
        charcoal: "#212121",
        primary: "#FFB8A8",
        stroke: "#FFB8A8",
        desc: "#EDEDED",
        textSecondary: "#9F9E9E",
        iconGreen: "#CDFF41",
        description: "#EDEDED",
      },
      fontFamily: {},
    },
  },
  plugins: [],
};
export default config;

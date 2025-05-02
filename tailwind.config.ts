import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#121212",
        charcoal: "#212121",
        primary: "#FFB8A8",
        textSecondary: "#9F9E9E",
        description: "#EDEDED",
        headerBlur: "#00000029",
        iconGreen: "#CDFF41",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "480px",
        sm: "600px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },

      fontFamily: {},
      fontSize: {
        '7xl': '4.5rem',  // 72px
        '8xl': '6rem',    // 96px
        '9xl': '8rem',    // 128px
      },
    },
  },
  plugins: [],
};
export default config;

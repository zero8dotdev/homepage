import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: "#121212",
        charcoal: "#212121",
        primary: "#FFB8A8",
        stroke: "#FFB8A8",
        desc: "#EDEDED",
        headerBlur: "#00000029",
        menuIcon: "#CDFF41",
      },
      // fontWeight: {
      //   extrabold: "800",
      // },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

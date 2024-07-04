import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/contents/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0D0D0D",
        darkGray: "#808080",
        lightGray: "#C5C5C5",
        red: "#E93F3F",
        blue: "#3F64E9",
        yellow: "#FFB800",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      smartphone: "481px",
      tablet: "577px",
      laptop: "769px",
      desktop: "1025px",
      "large-width": "1441px",
      TV: "1919px",
    },
  },
  plugins: [],
};
export default config;

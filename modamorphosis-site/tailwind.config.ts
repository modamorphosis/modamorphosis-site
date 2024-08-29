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
        "off-white": "#f4f4f4",
        "off-black": "#191919",
        current: "currentColor",
        transparent: "transparent",
      },
      backgroundImage: {
        "menu-gradient":
          "linear-gradient(90deg, rgba(25,25,25,1) 45%, rgba(25,25,25,0) 75%)",
        "menu-gradient-mobile":
          "linear-gradient(180deg, rgba(25,25,25,1) 56%, rgba(25,25,25,0) 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "purple-swirl": "url('/img/MM_BG.png')",
      },
      fontFamily: {
        millionaire: ["Millionaire Roman", "cursive"],
        alliance: ["Alliance"],
      },
    },
  },
  plugins: [],
};
export default config;

import { fontFamily } from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        chakra: ["--font-Chakra", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};

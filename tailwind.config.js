import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        darkViolet: "hsl(257, 27%, 26%)",
        gray: "hsl(0, 0%, 75%)",
        darkGray: "#181A1B",
        grayishViolet: "hsl(257, 7%, 63%)",
        veryDarkBlue: "hsl(255, 11%, 22%)",
        veryDarkViolet: "hsl(260, 8%, 14%)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      fontWeight: {
        normal: 500,
        bold: 700,
      },
      backgroundImage: {
        "shorten-desktop": "url('/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/bg-shorten-mobile.svg')",
        "boost-desktop": "url('/bg-boost-desktop.svg')",
        "boost-mobile": "url('/bg-boost-mobile.svg')",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

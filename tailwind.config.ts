import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'bebas-neue': ['var(--font-bebas-neue)'],
        'montserrat': ['var(--font-montserrat)'],
      },
      borderRadius: {
        'custom': '20px',
      },
    },
  },
  plugins: [],
} satisfies Config;

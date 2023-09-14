import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'paper': '#f5f2eb',
      },
    },
  },
  plugins: [],
} satisfies Config;

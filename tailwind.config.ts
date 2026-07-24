import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        charcoal: "#111111",
        graphite: "#242424",
        pearl: "#F4F0E8",
        muted: "#B8B0A4",
        metal: "#A88D66"
      },
      fontFamily: {
        sans: ["var(--font-alegreya)", "Arial", "sans-serif"],
        serif: ["var(--font-cormorant)", "Georgia", "serif"]
      },
      boxShadow: {
        quiet: "0 24px 80px rgba(0, 0, 0, 0.34)"
      }
    }
  },
  plugins: []
};

export default config;

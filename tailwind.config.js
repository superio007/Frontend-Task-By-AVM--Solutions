/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2DD4BF",
        cardBg: "#0F172A",
        sidebarBg: "#111827",
        borderMuted: "rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss"

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B67E8",
        input: "#E3ECFF",
        secondary: "#697386",
      },
      boxShadow: {
        input:
          "0px 1px 1px 0px rgba(0, 0, 0, 0.04), 0px 2px 5px 0px rgba(0, 0, 0, 0.08);",
        qr: "0px 1px 1px 0px rgba(0, 0, 0, 0.08), 0px 2px 5px 0px rgba(0, 0, 0, 0.12), 0px -1px 1px 0px rgba(0, 0, 0, 0.12);",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          // Purple
          DEFAULT: "#657AE9",
          foreground: "#FFFFFF",
        },
        secondary: {
          // Light purple
          DEFAULT: "#d1d5f0",
          foreground: "#000000",
        },
        tertiary: {
          // Dark purple
          DEFAULT: "#363457",
          foreground: "#000000",
        },
        positive: {
          // Green
          DEFAULT: "#33ff66",
          foreground: "hsl(var(--positive-foreground))",
        },
        positiveDark: {
          // Green
          DEFAULT: "#22b224",
          foreground: "hsl(var(--positive-foreground))",
        },
        destructive: {
          // Red
          DEFAULT: "#ff6b6c",
          foreground: "hsl(var(--destructive-foreground))",
        },
        harmony: {
          // Yellow
          DEFAULT: "#FFC145",
          foreground: "hsl(var(--harmony-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "#FFFFFD",
          foreground: "hsl(var(--card-foreground))",
        },
        neutral: {
          1: "#A29EB6",
          2: "#A29EB6",
          3: "#EFF1F3",
          4: "#FFFFFF",
        },
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        libre: ['"Libre Baskerville"'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};

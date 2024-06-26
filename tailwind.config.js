/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Poppins", "sans-serif"],
        Changa: ["Changa", "sans-serif"],
        Title: ["Amiri", "sans-serif"],
        body: ["Cairo", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#1182c5",
        secondary: "#2aa6df",
        // dark: "#1e1e1e",
        dark: "#111827",
        // light: "#f3f4f6",
        light: "#f5f5f5",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
      },
    },
  },
  plugins: [],
};

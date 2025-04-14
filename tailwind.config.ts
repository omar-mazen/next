/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    corePlugins: {
      container: false,
    },
    theme: {
      fontFamily: {},
      extend: {
        colors: {
          "text-color": "var(--color-text-color) / <alpha-value>",
          "secondary-text": "var(--color-secondary-text) / <alpha-value>",
          "gray": "var(--color-gray) / <alpha-value>",
          "primary-color": "var(--color-primary-color) / <alpha-value>",
          "primary-background": "var(--color-primary-background) / <alpha-value>",
          "secondary-background": "var(--color-secondary-background) / <alpha-value>",
          "warning-color": "var(--color-warning-color) / <alpha-value>",
          "success-color": "var(--color-success-color) / <alpha-value>",
        },
        fontSize: {
          "h1": "var(--text-heading1)",
          "h2": "var(--text-heading2)",
          "h3": "var(--text-heading3)",
          "xsmall": "var(--text-xsmall-text)",
          "small": "var(--text-small-text)",
          "medium": "var(--text-medium-text)",
          "large": "var(--text-large-text)",
        },
        screens: {
          "mb": { "min": "0px", "max": "640px" },
        },
      },
    },
    plugins: [],
  }
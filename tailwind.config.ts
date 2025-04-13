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
          "text-color": "rgb(var(--text-color) / <alpha-value>)",
          "secondary-text": "rgb(var(--secondary-text) / <alpha-value>)",
          "gray": "rgb(var(--gray) / <alpha-value>)",
          "primary-color": "rgb(var(--primary-color) / <alpha-value>)",
          "primary-background": "rgb(var(--primary-background) / <alpha-value>)",
          "secondary-background": "rgb(var(--secondary-background) / <alpha-value>)",
          "warning-color": "rgb(var(--warning-color) / <alpha-value>)",
          "success-color": "rgb(var(--success-color) / <alpha-value>)",
        },
        fontSize: {
          "h1": "var(--heading1)",
          "h2": "var(--heading2)",
          "h3": "var(--heading3)",
          "xsmall": "var(--xsmall-text)",
          "small": "var(--small-text)",
          "medium": "var(--medium-text)",
          "large": "var(--large-text)",
        },
        screens: {
          "mb": { "min": "0px", "max": "640px" },
        },
      },
    },
    plugins: [],
  }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        white: "#fff",
        "component-colors-utility-gray-utility-gray-50": "#fafafa",
        gray: {
          100: "#181d27",
          200: "#081735",
          300: "#171717",
          400: "rgba(255, 255, 255, 0.12)",
        },
        "component-colors-utility-gray-utility-gray-200": "#e9eaeb",
        gainsboro: {
          100: "#e6e6e6",
          200: "#d8dae5",
        },
        silver: "#bfc2cc",
        lightgray: "#d5d7da",
        "component-colors-utility-gray-utility-gray-700": "#414651",
        "colors-text-text-quaternary-500": "#717680",
        royalblue: {
          100: "#1570ef",
          200: "#175cd3",
          300: "#0049c6",
        },
        aliceblue: {
          100: "#eff8ff",
          200: "#e6e8f0",
        },
        lightskyblue: "#b2ddff",
        whitesmoke: "#f5f5f5",
        "colors-text-text-tertiary-600": "#535862",
        "colors-text-text-brand-tertiary-600": "#7e56d9",
      },
      spacing: {
        "spacing-xxs": "2px",
        "spacing-md": "8px",
        "spacing-lg": "12px",
        "spacing-xs": "4px",
        "spacing-2xl": "20px",
        "spacing-xl": "16px",
        "spacing-3xl": "24px",
        "spacing-xl1": "16px",
        "spacing-3xl1": "24px",
        "spacing-xxs1": "2px",
        "spacing-lg1": "12px",
        "spacing-md1": "8px",
        "spacing-2xl1": "20px",
        "spacing-sm": "6px",
      },
      fontFamily: {
        "text-xs-medium": "Inter",
        satoshi: "Satoshi",
      },
      borderRadius: {
        "9980xl": "9999px",
        "radius-xl": "12px",
        "radius-md": "8px",
        "radius-full": "9999px",
        "radius-sm": "6px",
        "radius-full1": "9999px",
        "radius-md1": "8px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      xl: "20px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "11xl": "30px",
      lg: "18px",
      "5xl": "24px",
      inherit: "inherit",
    },

  },
  corePlugins: {
    preflight: false,
  },

};

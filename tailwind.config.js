/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        gray: {
          50: "#fafafa",  // was component-colors-utility-gray-utility-gray-50
          100: "#181d27",
          200: "#e9eaeb", // was component-colors-utility-gray-utility-gray-200
          300: "#171717",
          400: "rgba(255, 255, 255, 0.12)",
          700: "#414651", // was component-colors-utility-gray-utility-gray-700
        },
        gainsboro: {
          100: "#e6e6e6",
          200: "#d8dae5",
        },
        silver: "#bfc2cc",
        lightgray: "#d5d7da",
        text: {
          quaternary: "#717680", // was colors-text-text-quaternary-500
          tertiary: "#535862",   // was colors-text-text-tertiary-600
          brand: "#7e56d9",      // was colors-text-text-brand-tertiary-600
        },
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
      },
      spacing: {
        "spacing-xxs": "2px",
        "spacing-xs": "4px",
        "spacing-sm": "6px",
        "spacing-md": "8px",
        "spacing-lg": "12px",
        "spacing-xl": "16px",
        "spacing-2xl": "20px",
        "spacing-3xl": "24px",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        satoshi: ["Satoshi", "sans-serif"],
      },
      borderRadius: {
        "radius-xl": "12px",
        "radius-md": "8px",
        "radius-full": "9999px",
        "radius-sm": "6px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      xl: "20px",
      inherit: "inherit",
    },

  },
  corePlugins: {
    preflight: false,
  },

};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkish-color-dark-bg": "#1c1a2e",
        "text-color-pure-white": "#fff",
        "text-color-text-3": "#78778b",
        "secondary-color": "#29a073",
        "darkish-color-dark-2": "#282541",
        "text-color-text-2": "#929eae",
        "darkish-color-dark-1": "#201e34",
        "darkish-color-dark-shade": "#1e1c30",
        "primary-color": "#c8ee44",
        "text-color-text-1": "#1b212d",
      },
      spacing: {},
      fontFamily: {
        "extra-font-size-18-semibold": "'Kumbh Sans'",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      sm: "14px",
      lg: "18px",
      "5xl": "24px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

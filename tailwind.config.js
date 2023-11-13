/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "darkish-color-dark-bg": "#1c1a2e",
        black: "#000",
        "darkish-color-dark-2": "#282541",
        "text-color-text-3": "#78778b",
        "text-color-pure-white": "#fff",
        gainsboro: "#d9d9d9",
        orangered: "#cc0000",
        "darkish-color-dark-1": "#201e34",
        "darkish-color-dark-shade": "#1e1c30",
        "text-color-text-2": "#929eae",
        "primary-color": "#c8ee44",
        "text-color-text-1": "#1b212d",
        "secondary-color": "#29a073",
      },
      spacing: {},
      fontFamily: {
        "size-14-size-14-medium": "'Kumbh Sans'",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "3xs": "10px",
        "8xs": "5px",
        "81xl": "100px",
        "10xs": "3px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "6xl": "25px",
      lg: "18px",
      base: "16px",
      "11xl": "30px",
      "5xl": "24px",
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

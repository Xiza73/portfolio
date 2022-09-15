/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  important: true,
  theme: {
    colors: {
      base: {
        100: "#F0EBE3",
        200: "#E1D7C7",
        300: "#D2C3AB",
      },
      "dark-base": {
        100: "#252424",
        200: "#1E1D1D",
        300: "#171616",
      },
      primary: {
        100: "#E4DCCF",
        200: "#C9B99E",
        300: "#AF967D",
      },
      "dark-primary": {
        100: "#193e36",
        200: "#0f2c25",
        300: "#061a14",
      },
      secondary: {
        100: "#7D9D9C",
        200: "#5B7B7A",
        300: "#394B4A",
      },
      "dark-secondary": {
        100: "#196b56",
        200: "#0f4a3e",
        300: "#062a26",
      },
      shadow: {
        100: "#576F72",
        200: "#3D4F52",
        300: "#232F32",
      },
      "dark-shadow": {
        100: "#DCD7C9",
        200: "#B9B2A3",
        300: "#96907D",
      },
      light: {
        100: "#F5F5F5",
        200: "#E8E8E8",
        300: "#DADADA",
      },
      dark: {
        100: "#1D1D1D",
        200: "#0F0F0F",
        300: "#000000",
      },
    },
    extend: {},
  },
  plugins: [],
};

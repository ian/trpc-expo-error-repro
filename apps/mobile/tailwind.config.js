const colors = require("./constants/Colors")

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
    },
    fontFamily: {
      sans: ["DMSans_400Regular", "ui-sans-serif", "sans-serif"],
      "sans-md": ["DMSans_500Medium", "ui-sans-serif", "sans-serif"],
      "sans-bold": ["DMSans_700Bold", "ui-sans-serif", "sans-serif"],
      serif: ["PlayfairDisplay_400Regular", "ui-serif", "serif"],
      "serif-md": ["PlayfairDisplay_500Medium", "ui-serif", "serif"],
      "serif-bold": ["PlayfairDisplay_700Bold", "ui-serif", "serif"],
    },
    fontSize: {
      xs: ["10px", "12px"],
      sm: ["12px", "15px"],
      md: ["18px", "20px"],
      lg: ["24px", "28px"],
      xl: ["33px", "32px"],
      title: ["33px", "32px"],
    },
  },
}

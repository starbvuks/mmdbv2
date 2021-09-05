module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      mainYellow: "#f5c53b",
      mainBlueSteel: "#1a263b",
      mainFadedSteel: "#2e3c48",
    }),
    textColor: (theme) => ({
      mainGrey: "#b3a6a6",
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

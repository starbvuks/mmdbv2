module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      mainYellow: "#f5c53b",
      mainNav: "#2f3b3e",
      mainNavHead: "#3b5058",
      mainBlueSteel: "#1a263b",
      mainFadedSteel: "#2e3c48",
    }),
    textColor: (theme) => ({
      mainYellow: "#f5c53b",
      mainGrey: "#c3d8c8",
    }),
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      width: {
        "2/7": "28.5714286%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

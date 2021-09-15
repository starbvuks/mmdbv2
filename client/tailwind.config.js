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
      mainFadedSteel: "#2e3c48",
      mainGrey: "#c3d8c8",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      mainYellow: "#f5c53b",
      mainGrey: "#c3d8c8",
      mainGreyDark: "#B3C7B8",
      mainFadedSteel: "#2e3c48",
    }),
    divideColor: (theme) => ({
      ...theme("borderColors"),
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
      backgroundImage: (theme) => ({
        landingBg: "url('https://wallpaperaccess.com/full/2325423.jpg')",
        landingBanner:
          "linear-gradient(#2e3c48, rgba(0,0,0,0) 30%, #2e3c48), url('/landingbanner.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

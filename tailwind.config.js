const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "media", // or 'media' or 'class'
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        white: {
          100: "rgba(255,255,255,0.1)",
          200: "rgba(255,255,255,0.2)",
          300: "rgba(255,255,255,0.3)",
          400: "rgba(255,255,255,0.4)",
          500: "rgba(255,255,255,0.5)",
          600: "rgba(255,255,255,0.6)",
          700: "rgba(255,255,255,0.7)",
          800: "rgba(255,255,255,0.8)",
          900: "rgba(255,255,255,0.9)",
          DEFAULT: "#FFFFFF",
        },
        black: {
          100: "rgba(0,0,0,0.1)",
          200: "rgba(0,0,0,0.2)",
          300: "rgba(0,0,0,0.3)",
          400: "rgba(0,0,0,0.4)",
          500: "rgba(0,0,0,0.5)",
          600: "rgba(0,0,0,0.6)",
          700: "rgba(0,0,0,0.7)",
          800: "rgba(0,0,0,0.8)",
          900: "rgba(0,0,0,0.9)",
          DEFAULT: "#000",
        },
        mred: {
          light: "#F8DDDD",
          DEFAULT: "#F24A49",
          dark: "#DD5657",
        },
        mblue: {
          sky: "#40C4FF",
          lighter: "#4A5DDE",
          light: "#1A5DD6",
          DEFAULT: "#004BD2",
          dark: "#183C67",
        },
        purple: {
          DEFAULT: "#5736B8",
        },
        mgreen: {
          DEFAULT: "#7BD284",
          dark: "#006B50",
        },
        mgray: {
          lightest: "#FAFAFA",
          lighter: "#F6F6F6",
          light: "#EBEBEB",
          DEFAULT: "#666666",
          dark: "#808080",
          darker: "#3F3F3F",
        },
        myellow: {
          DEFAULT: "#FFCE31",
        },
      },
      height: {
        px2: "2px",
        72: "18rem",
        80: "20rem",
        96: "24rem",
        112: "28rem",
        128: "32rem",
        160: "40rem",
        180: "45rem",
        192: "48rem",
      },
      width: {
        72: "18rem",
        80: "20rem",
        96: "24rem",
        112: "28rem",
        128: "32rem",
        160: "40rem",
        180: "45rem",
        192: "48rem",
      },
      borderRadius: {
        none: "0",
        10: "10px",
        14: "14px",
        28: "28px",
      },
      fontSize: {
        8: "8px",
        10: "10px",
        56: "56px",
      },
      padding: {
        72: "18rem",
        80: "20rem",
        96: "24rem",
        128: "32rem",
      },
      margin: {
        72: "18rem",
        80: "20rem",
        96: "24rem",
        128: "32rem",
      },
      inset: {
        50: "50%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

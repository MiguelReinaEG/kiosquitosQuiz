const tintColorLight = "#2f95dc";
const tintColorDark = "#fff";

export const palette = {
  primary: "hsla(349, 100%, 45%, 1)",
  h0s0l0: "hsla(0, 0%, 0%, 1)",
  h0s0l100: "hsla(0, 0%, 100%, 1)",
  black: "$palette.h0s0l0",
  white: "$palette.h0s0l100",
};

export default {
  light: {
    text: "#000",
    background: "#fff",
    tint: tintColorLight,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#fff",
    background: "#000",
    tint: tintColorDark,
    tabIconDefault: "#ccc",
    tabIconSelected: tintColorDark,
  },
};

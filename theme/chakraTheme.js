import theme, { Theme } from "@chakra-ui/theme";
// import { themeValues } from "./themeValues";
import { Fonts } from "./Fonts";

// Let's say you want to add custom colors
const chakraTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    custom: {
      orange7: "#fc6400",
      red8: "#d2202f",
      fuschia8: "#bb01cc"
    }
  },
  fonts: {
    ...theme.fonts,
    title: "DM Mono",
    // text: "'DM Mono', monospace",
    // text: "'Space Grotesk', sans-serif",
    text: "Space Grotesk",
    nav: "Space Grotesk"
  },
  textStyles: {
    title: {
      textAlign: "left",
      fontSize: ["4xl", "3xl", "3xl"],
      fontFamily: "title",
      lineHeight: "150%",
      color: "custom.orange7"
    },
    heading1: {
      fontWeight: "bold",
      fontFamily: "title",
      fontSize: ["2xl"],
      textTransform: "uppercase",
      letterSpacing: "wide",
      lineHeight: "150%",
      color: "custom.orange7"
    },
    nav: {
      fontSize: ["lg", "xl"],
      fontFamily: "nav",
      fontStyle: "italic",
      fontWeight: "bold",
      color: "custom.brightblue",
      lineHeight: "200%",
      letterSpacing: "widest"
    },
    text: {
      fontSize: ["md", "lg"],
      fontFamily: "text",
      color: "gray.900"
    },
    subtitle: {
      fontSize: ["lg", "xl"],
      fontFamily: "text",
      color: "gray.900",
      lineHeight: "200%"
    }
  }
};

export default chakraTheme;

import { createTheme } from "@mui/material/styles";

const recipeTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#6750A4",
    },
    secondary: {
      main: "#625B71",
    },
    tertiary: {
      main: "#7D5260",
    },
    error: {
      main: "#B3261E",
    },
    background: {
      default: "#ffffff",
    },
    typography: {
      fontFamily: "Roboto, Arial, sans-serif",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '2em',
        },
      },
    },
  },
});

export default recipeTheme;
import { createTheme, Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    green: Palette["primary"];
    gray: Palette["primary"];
    red: Palette["primary"];
  }

  interface PaletteOptions {
    green?: PaletteOptions["primary"];
    gray?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
  }
}

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#719FA8",
    },
    secondary: {
      main: "#9AC7AC",
    },
    green: {
      main: "#EAEEE2",
      dark: "#A6C7CD",
    },
    gray: {
      main: "#7A7F86",
      dark: "#2D3D54",
    },
    red: {
      main: "#F14E25",
    },
  },
  typography: {
    fontFamily: "Arial, Roboto",
    // Main title
    h4: {
      fontWeight: "bold",
      color: "#2D3D54",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
        containedPrimary: {
          backgroundColor: "#719FAB",
          color: "white",
          fontWeight: 800,
          fontSize: "1rem",
          letterSpacing: "1px",
          height: "46px",
        },
        containedSecondary: {
          backgroundColor: "#9AC7AC",
          color: "white",
          fontWeight: 800,
        },
      },
    },
  },
});

export default theme;

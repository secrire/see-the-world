import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2D3D54",
    },
    secondary: {
      main: "#719FA8",
    },
  },
  typography: {
    fontFamily: "Arial, Roboto",
    align: "left",
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#2D3D54",
    },
    h2: {
      fontSize: "1.2rem",
      fontWeight: "bold",
      color: "#2D3D54",
    },
    body1: {
      fontSize: "1rem",
      color: "#7A7F86",
    },
    body2: {
      fontSize: "1rem",
      fontWeight: 700,
      color: "#2D3D54",
    },
    body3: {
      fontSize: "1rem",
      color: "#9AC7AC",
    },
    body4: {
      fontSize: "1rem",
      color: "#719FA8",
    },
    body5: {
      fontSize: "1rem",
      fontWeight: 700,
      color: "#A6C7CD",
    },
    body6: {
      fontSize: "0.8rem",
      color: "#7A7F86",
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

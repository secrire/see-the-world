import React from "react";
import { createRoot } from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "@mui/material/styles";

import App from "./pages/App";
import theme from "./stores/themeStyleStore";
import { SelectedCityProvider } from "./stores/selectedCityStore";

import "./index.css";

const Main = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SelectedCityProvider>
        <App />
      </SelectedCityProvider>
    </ThemeProvider>
  </React.StrictMode>
);

const mainContainer = document.getElementById("root");
const root = createRoot(mainContainer!);
root.render(<Main />);

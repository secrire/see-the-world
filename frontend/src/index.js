import React from "react";
import { createRoot } from "react-dom/client";

import App from "./pages/App";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./stores/themeStyleStore";
import { SelectedCityProvider } from "./stores/selectedCityStore";

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
const root = createRoot(mainContainer); // createRoot(mainContainer!) if using TypeScript
root.render(<Main />);

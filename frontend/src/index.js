import React from "react";
import ReactDOM from "react-dom";

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

ReactDOM.render(<Main />, document.getElementById("root"));

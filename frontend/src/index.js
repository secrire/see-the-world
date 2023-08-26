import React from "react";
import ReactDOM from "react-dom";

import App from "./containers/App";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./stores/themeStyleStore";
import { QuestionCountProvider } from "./stores/questionCountStore";
import { SelectedCityProvider } from "./stores/selectedCityStore";

const Main = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QuestionCountProvider>
        <SelectedCityProvider>
          <App />
        </SelectedCityProvider>
      </QuestionCountProvider>
    </ThemeProvider>
  </React.StrictMode>
);

ReactDOM.render(<Main />, document.getElementById("root"));

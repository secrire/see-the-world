import React from "react";
import ReactDOM from "react-dom/client";

import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import "mapbox-gl/dist/mapbox-gl.css";
import { ThemeProvider } from "@mui/material/styles";

import theme from "./stores/themeStyleStore";
import { QuestionCountProvider } from "./stores/questionCountStore";
import { SelectedCityProvider } from "./stores/selectedCityStore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

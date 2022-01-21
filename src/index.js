import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalFonts from "./style/font/fonts";

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

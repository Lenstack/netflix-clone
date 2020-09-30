import React from "react";
import { render } from "react-dom";
import "normalize.css";
import * as serviceWorker from "./serviceWorker";
import { GlobalStyles } from "./global-styles";
import App from "./app";

render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.register();

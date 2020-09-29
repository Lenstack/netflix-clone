import React from "react";
import { render } from "react-dom";
import "normalize.css";
import * as serviceWorker from "./serviceWorker";
import App from "./app";

render(<App />, document.getElementById("root"));

serviceWorker.unregister();

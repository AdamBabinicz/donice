import React from "react";
import { createRoot } from "react-dom/client";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./assests/font-awesome/css/all.css";

const engine = new Styletron();
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>
);

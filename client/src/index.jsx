import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <GlobalStyle />
      <App />
  </React.StrictMode>,
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { init } from "@feathery/react";
import { FEATHERY_SDK_KEY } from "./FeatheryConfig";

init(FEATHERY_SDK_KEY);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

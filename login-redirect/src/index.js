import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";

export const stytchClient = new StytchHeadlessClient(
  "public-token-live-a0be7d03-805e-4d92-8b22-f89612cf2b6b"
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

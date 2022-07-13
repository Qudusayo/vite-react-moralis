import React from "react";
import ReactDOM from "react-dom/client";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoralisProvider
      appId={import.meta.env.VITE_MORALIS_APP_ID}
      serverUrl={import.meta.env.VITE_MORALIS_SERVER_URL}
    >
      <App />
    </MoralisProvider>
  </React.StrictMode>
);

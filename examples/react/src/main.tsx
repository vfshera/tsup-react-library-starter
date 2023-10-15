import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SampleLibProvider } from "sample-react-library";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SampleLibProvider options={{ btnId: "react-btn" }}>
      <App />
    </SampleLibProvider>
  </React.StrictMode>
);

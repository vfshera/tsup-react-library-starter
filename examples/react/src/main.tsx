import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "sample-react-library/styles.css";

import { SampleLibProvider } from "sample-react-library";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SampleLibProvider options={{ a: "React", b: "App" }}>
      <App />
    </SampleLibProvider>
  </React.StrictMode>
);

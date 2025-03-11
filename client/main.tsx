// Andrew branch of git@github.com:Mahdi-196/audiophile.git

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const rootElement = document.getElementById("root");

// useEffect(() => {
//   if (!rootElement) {
//     console.error("Element not found");
//   }
// }, [rootElement]);

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
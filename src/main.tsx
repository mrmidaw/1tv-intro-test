import App from "./App";
import "./index.scss";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback="loading">
        <HelmetProvider>
          <App />
        </HelmetProvider>
        <Toaster position="top-center" />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

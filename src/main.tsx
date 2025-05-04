import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./Routes"; // This is a component, not a router object
import './index.css';
import "react-toastify/dist/ReactToastify.css";



const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AppRouter />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}

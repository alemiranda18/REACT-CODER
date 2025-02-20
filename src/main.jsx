import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App.jsx";
import "./index.css";

const DOMElement = document.getElementById("root");
const VDOMElement = createRoot(DOMElement);

VDOMElement.render(
  <StrictMode>
    <App />
  </StrictMode>
);
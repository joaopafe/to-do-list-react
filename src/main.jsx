import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./style/reset.css";
import "./style/App.css";
import "./style/Task.css";
import "./style/TaskInput.css";
import "./style/TaskList.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

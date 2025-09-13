import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Examble1 from "./Examble1.jsx";
import Examble2 from "./Examble2.jsx";
import Examble3 from "./Examble3.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Examble1 name="John" />
    <Examble2 />
    <Examble3 />
  </StrictMode>
);

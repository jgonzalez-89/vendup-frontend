import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";

import Layout from "./layout.jsx";

createRoot(document.querySelector("#app")).render(<Layout />);

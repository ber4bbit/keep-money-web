import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./shared/styles/index.scss";

const rootContainer: HTMLElement = document.getElementById("root")!;

createRoot(rootContainer).render(
    <StrictMode>
        <App />
    </StrictMode>,
);

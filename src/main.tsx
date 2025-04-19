import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App.tsx";
import "./shared/styles/index.scss";
// import { Routes, Route } from "react-router";

const rootContainer: HTMLElement = document.getElementById("root")!;

createRoot(rootContainer).render(
    <StrictMode>
        <BrowserRouter>
            {/* <Routes>
                <Route path="/" element={<App />} />
                <Route path="/settings" />
                <Route path="/transactions" />
            </Routes> */}
            <App />
        </BrowserRouter>
    </StrictMode>,
);

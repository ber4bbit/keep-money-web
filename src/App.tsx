import { type ReactNode } from "react";
import Sidebar from "./widgets/Sidebar/Sidebar";
import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./widgets/Header/Header";
import "./App.scss";

const App = (): ReactNode => {
    return (
        <main className="container">
            <Sidebar />
            <div className="page">
                <Header />
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </div>
        </main>
    );
};

export default App;

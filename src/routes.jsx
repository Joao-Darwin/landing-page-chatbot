import React from "react";
import About from "./pages/About/About";
import { Route, Routes } from "react-router-dom";
import PageInitial from "./pages/PageInitial/PageInitial";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<PageInitial />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
};

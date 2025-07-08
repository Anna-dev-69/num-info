import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Info from "./pages/info/info";
import InfoRandom from "./pages/info-random/info-random";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/info-random" element={<InfoRandom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

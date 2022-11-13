import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Avaliacao from "./pages/avaliaçao/avaliacao";

export default function Routers() {
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Avaliacao" element={<Avaliacao/>}/>
      </Routes>
    );
}




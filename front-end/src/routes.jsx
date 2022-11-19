import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Avaliacao from "./pages/avaliaçao/avaliacao";
import Cadastro from "./pages/Cadastro/cadastro";
import Login from "./pages/Login/login";

export default function Routers() {
    return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Avaliacao" element={<Avaliacao/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    );
}




import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Avaliacao from "./pages/avaliaçao/avaliacao";
import Cadastro from "./pages/Cadastro/cadastro";
import Login from "./pages/Login/login";
import Sobre from "./pages/Sobre/Sobre";
import Glossario from "./pages/Glossario/glossario";

export default function Routers() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Avaliacao" element={<Avaliacao />} />
      <Route path="/Cadastro" element={<Cadastro />} />
      <Route path="/Sobre" element={<Sobre />} />
      <Route path="/Glossario" element={<Glossario />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

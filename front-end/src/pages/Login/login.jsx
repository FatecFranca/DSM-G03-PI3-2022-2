import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavLogin from "../../components/navLogin/nav";
import "./login.css";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./login.css"

import Nav2 from "../../components/nav/nav";



const validation = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
});
function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    setEmail(data.email);

    console.log("Usuário.: " + email);

    const retorno = await api
      .post("user/login", { email })
      .then(() => {
        navigate("/Sobre");
        console.log(response);
      })
      .catch(() => {});
  }

  return (
    <div className="app">
      <div className="form">
      <NavLogin />
        <form className="teste" onSubmit={onSubmit}>
          <h1 className="title">Login</h1>
          <label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Digite seu e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="error-message">{errors.email?.message}</p>
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
export default Cadastro;
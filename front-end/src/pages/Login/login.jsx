import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import NavLogin from "../../components/navLogin/nav";
import validator from 'validator'
import "./login.css";

//Pagina Home da Aplicação
const validation = yup.object().shape({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
});

function Login() {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });

  const onSubmit = (data) =>
    axios
      .get("http://localhost:3000/user", data)
      .then(() => {
        navigate("/");
      })
      .catch(() => {});

  return (
    <div className="app">
      <div className="form">
      <NavLogin/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Entrar</h1>

          <label>
            <h4>E-mail:</h4>
            <input type="text" name="E-mail" {...register("email")} />
            <p className="error-message">{errors.email?.message}</p>
          </label>

          <label>
            <h4>Senha:</h4>
            <input type="password" name="E-mail"/>
            <p className="error-message">{errors.email?.message}</p>
          </label>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
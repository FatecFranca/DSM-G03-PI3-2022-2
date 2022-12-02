import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import NavCadastro from "../../components/navCadastro/nav";
import "./cadastro.css";

//Pagina Home da Aplicação
const validation = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("O email é obrigatório"),
});

function Cadastro() {
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
      .post("http://localhost:3000/user", data)
      .then(() => {
        navigate("/");
      })
      .catch(() => {});

  return (
    <div className="app">
      <div className="form">
      <NavCadastro/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="cadastro">Cadastro de Usuario</h1>
          <label>
            <h4>Nome Completo:</h4>
            <input type="text" name="nome" {...register("name")} />
            <p className="error-message">{errors.name?.message}</p>
          </label>

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
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
import React from "react";

import "./glossario.css";
import Nav2 from "../../components/nav/nav";










export default function Glossario() {
  return (
    <div className="app">
      <Nav2/>

      <div className="glossario"></div>
      <div className="conteudo"></div>
      <div className="cont">
        <h1 className="titulo" style={{ fontSize: "45px" }}> Glossario </h1>
        <p >
          O glossário aqui apresentado não tem a intenção de ser uma obra de
          referência completa. O seu objetivo é esclarecer os significados de
          alguns termos usados nesse trabalho. Um termo pode ser incluído nesse
          glossário, se utilizado inconsistentemente na literatura em geral, ou
          se o seu significado nesse trabalho for mais específico do que o
          normal.
        </p>
        <br />
        <h2>Condução</h2>
        <p>
          A condução refere-se aos meios disponíveis para aconselhar, orientar,
          informar e conduzir o usuário na interação com o computador
          (mensagens, alarmes, rótulos, etc.). Quatro subcritérios participam da
          condução: a presteza, o agrupamento/distinção entre itens, o feedback
          imediato e a legibilidade.
        </p>
        <h2>Presteza</h2>
        <p>
          Esse critério engloba os meios utilizados para levar o usuário a
          realizar determinadas ações, como, por exemplo, entrada de dados. Esse
          critério engloba também todos os mecanismos ou meios que permitem ao
          usuário conhecer as alternativas, em termos de ações, conforme o
          estado ou contexto nos quais ele se encontra. A presteza diz respeito
          igualmente às informações que permitem ao usuário identificar o estado
          ou contexto no qual ele se encontra, bem como as ferramentas de ajuda
          e seu modo de acesso.
        </p>
        <h2>Agrupamento/Distinção de Itens</h2>
        <p>
          O critério Agrupamento/Distinção de Itens diz respeito à organização
          visual dos itens de informação relacionados uns com os outros de
          alguma maneira. Esse critério leva em conta a localização e algumas
          características gráficas (formato) para indicar as relações entre os
          vários itens mostrados, para indicar se eles pertencem ou não a uma
          dada classe, ou ainda para indicar diferenças entre classes. Esse
          critério também diz respeito à organização dos itens de uma classes. O
          critério agrupamento/distinção de itens está subdividido em dois
          critérios: agrupamento/distinção por localização e
          agrupamento/distinção por formato.
        </p>
      </div>
    </div>
  );
}

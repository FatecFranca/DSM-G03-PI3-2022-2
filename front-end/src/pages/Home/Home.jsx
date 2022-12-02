import Nav2 from "../../components/nav/nav";

import "./Home.css";

function Home() {
  return (
    <div className="app">
      <section>
        <Nav2 />
        <div className="circle"></div>

        <div className="content">
          <div className="text">
            <h2>
              Avaliação Ergolist
            </h2>
            <p>
          As interfaces dos sistemas informacionais têm evoluído 
          dramaticamente ao longo dos últimos anos. Com a expansão 
          da internet, os usuários de computadores e celulares puderam 
          acessar sites que solicitavam muita informação para ser 
          processada. Foi verificado um aumento na demanda pelas 
          interfaces dos computadores e celulares que promoviam um 
          suporte mais humano às operações de trabalho, 
          especialmente por parte das pessoas mais jovens e 
          inexperientes do mercado profissional.

            </p>
            <a href="#">Iniciar avaliação </a>
          </div>
        </div>
        <ul className="icons">
          <li>
            <a ></a>
          </li>
          <li>
            <a ></a>
          </li>
          <li>
            <a></a>
          </li>
        </ul>
        <div className="boxImg"></div>
      </section>
    </div>
  );
}
export default Home;

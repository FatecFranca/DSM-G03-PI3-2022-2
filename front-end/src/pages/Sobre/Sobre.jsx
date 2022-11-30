import NavSobre from "../../components/navSobre/nav";
import "../Sobre/sobre.css";

export default function Sobre() {
  return (
    <div className="app">
      <NavSobre />
      <div className="sobre">
        <h1>Sobre</h1>

        <p>
          Este trabalho tem como objetivo determinar através de uma avaliação, a
          qualidade ergonômica da interface gráfica do SolidWorks. O SolidWorks
          é um software de CAD (Computer Aided Design), que se fundamenta na
          modelagem sólida e, tem como finalidade o desenvolvimento de desenhos
          ou projetos no ambiente 3D (três dimensões) (Souza, 2000). Para a
          verificação da qualidade ergonômica do software foi utilizada uma
          técnica analítica, isto é, um checklist. A lista de verificação
          utilizada, foi o Ergolist (ferramenta de avaliação de software pela
          internet). O processo de avaliação foi conduzido por usuários
          experientes que, com base na lista de verificação ergonômica,
          determinaram as principais qualidades do software, bem como suas
          principais deficiências, finalizando com recomendações conceituais
          para a melhoria da interface. A importância do design de uma IHC,
          adequadamente planejada, desenvolvida, otimizada e concebida, tem como
          resultado a satisfação do usuário na operacionalização do sistema e
          portanto, busca melhorar o desepenho do usuário que poderá se traduzir
          em uma maior produtividade.
        </p>
      </div>
    </div>
  );
}

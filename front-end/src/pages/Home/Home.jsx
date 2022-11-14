import Nav2 from "../../components/nav/nav";
import Signin from "../../components/Signin";
import Signup from "../../components/Signup";
import { ContainerHome } from "./style";
import "./Home.css";

function Home() {
  return (
    <Base>
      <ContainerHome>
        <Nav2 />
        <aside>
          {acesso ? (
            <Signin setAcesso={setAcesso} />
          ) : (
            <Signup setAcesso={setAcesso} />
          )}
        </aside>
      </ContainerHome>
    </Base>
  );
}
export default Home;

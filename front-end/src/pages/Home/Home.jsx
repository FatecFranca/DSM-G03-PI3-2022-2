import Nav2 from "../../components/nav/nav";
import { ContainerHome } from "./style";
import Base from "../Base"
import "./Home.css";

function Home() {
  return (
    <Base>
      <ContainerHome>
        <Nav2 />
      </ContainerHome>
    </Base>
  );
}
export default Home;

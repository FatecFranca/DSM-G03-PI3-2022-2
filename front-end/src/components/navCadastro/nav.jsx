import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./nav.css";

function NavCadastro() {
  return (
    <div className="nav">
      <nav>
        <ul className="list">
          <img className="logo" src={logo} />
          <li>
            <div className="avali">
              <Link to="/">
              <button class="custom-btn btn-7" to="/Cadastro">
                Login
              </button>
              </Link>
              <Link to="/Sobre">
              <button class="custom-btn btn-7" to="/Sobre">
                Sobre
              </button>
              </Link>
              <button class="custom-btn btn-7" to="/Avaliacao">
                Avaliacão
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavCadastro;

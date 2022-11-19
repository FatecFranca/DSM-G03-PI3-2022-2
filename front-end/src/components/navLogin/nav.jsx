import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./nav.css";

function NavLogin() {
  return (
    <div className="nav">
      <nav>
        <ul className="list">
          <img className="logo" src={logo} />
          <li>
            <div className="avali">
              <button class="custom-btn btn-7" to="/Cadastro">
                Cadastro
              </button>
              <button class="custom-btn btn-7" to="/Sobre">
                Sobre
              </button>
              <button class="custom-btn btn-7" to="/"></button>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavLogin;

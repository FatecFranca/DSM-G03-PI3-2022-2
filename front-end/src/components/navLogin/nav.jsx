import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./nav2.css";

function NavLogin() {
  return (
    <div className="navb1">
      <nav>
        <ul className="list">
          <img className="logo" src={logo} />
          <li>
            <div className="avali">
              <Link to="/cadastro">
              <button class="custom-btn btn-7" >
                Cadastro
              </button>
              </Link>
              <Link to="/Sobre">
              <button class="custom-btn btn-7" to="/Sobre">
                Sobre
              </button>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavLogin;

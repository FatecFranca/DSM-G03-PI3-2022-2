import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./nav3.css";

function NavCadastro() {
  return (
    <div className="navB2">
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
             
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavCadastro;

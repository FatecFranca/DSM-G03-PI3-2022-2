import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./nav4.css";

function NavSobre() {
  return (
    <div className="nav">
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
              <Link to="/Login">
              <button class="custom-btn btn-7" to="/Login">
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

export default NavSobre;

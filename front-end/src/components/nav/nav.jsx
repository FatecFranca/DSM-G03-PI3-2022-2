import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
import "./nav1.css";

function Nav2() {
  return (
    <div className="navB3">
      <nav>
        <ul className="list">
          <Link to="/Home">
          <img className="logo" src={logo} />
          </Link>
          <li>
            <div className="avali">
              <Link to="/avaliacao">
              <button class="custom-btn btn-7" to="/Avaliacao">
                Avaliacão
              </button>
              </Link>
              <Link to="/Sobre">
              <button class="custom-btn btn-7" to="/Sobre">
                Sobre
              </button>
              </Link>


              <Link to="/Glossario">
              <button class="custom-btn btn-7" to="/Sobre">
                Glossario
              </button>
              </Link>
              


              
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav2;

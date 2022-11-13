import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import "./nav.css"

function Nav2() {
    return (
     <div className="nav">
      <nav>
        <ul className="list">
          <img className="logo" src={logo} />
          <li>
          <Link to="/Avaliacao">
          <div className="avali">
            <p>Avaliação</p>
          </div>
          </Link>
          </li>
          

        
          


          
        </ul>
   
     
      </nav>
     </div >

          );
        }
        
        export default Nav2;
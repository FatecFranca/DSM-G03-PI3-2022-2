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
          
          <div className="avali">
            <button class="custom-btn btn-7" to="/Avaliacao">Avaliacão</button>
          </div>
     
          </li>
          

        
          


          
        </ul>
   
     
      </nav>
     </div >

          );
        }
        
        export default Nav2;
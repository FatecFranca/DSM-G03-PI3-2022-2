// import Nav2 from "../../components/nav/nav";
import { useEffect, useState } from "react";
import axios from "axios";

import "./avaliacao.css"




function Avaliacao() {
    const [onSubmit, setonSubmit] = useState([]);
    
    useEffect(() => {
        axios
          .get("http://localhost:3000/question")
    
          .then((response) => {
            setonSubmit(response.data)
            console.log(response.data)
          })
          .catch(() => {});
      }, []);


return(
    
 <div>
      {/* <Nav2/>  */}
     <div className="card-post">
        
        <div   className="line-post">
        {onSubmit.map((onSubmit, key) => {
            return (
            <div  className="fields"key={key}>
                <div className="questao">
                <p>{onSubmit.order} </p>
                <p>{onSubmit.enunciation}</p>
                </div>
                <div className="resposta">
                    <form>
                        <div className="r1">
                          
                        <input  type="checkbox" />
                        
                        </div>

                        <div  className="r2">
                        <input type="checkbox" />
                        </div>
                        
                        <div  className="r3">
                        <input type="checkbox" />
                        </div>

                        <div  className="r4">
                        <input type="checkbox" />
                        </div>
                        
                        <div  className="r5">
                        <input  type="text"/>
                        </div>

                        <div className="btn-post" >
                            <button type="submit" >Enviar</button>
                        </div>
                    
                      

                       
                    </form>
                
                </div>

              



                
          
         
               
               
                
                
                
            </div>




                )
            })}






        </div>
     </div>
</div>
    

    )
}
export default  Avaliacao;

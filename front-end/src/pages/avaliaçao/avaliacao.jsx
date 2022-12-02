import Nav2 from "../../components/nav/nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import "./avaliacao.css"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';







const validationPost = yup.object().shape({

  

})




function Avaliacao() {
    let navigate = useNavigate();

    const [onSubmit, setonSubmit] = useState([]);
   
  
    const { register, handleSubmit, formState: { errors }, } = useForm({
      resolver: yupResolver(validationPost)
  })



    const Questao = (data) =>
    axios
      .post("http://localhost:3000/assessment/638a484819118135db36138a/answer",data)
      .then(() => {
        navigate("/Home");
      })
      .catch(() => {});


    
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
 <div className="app"> 
      <Nav2/> 

      {onSubmit.map((onSubmit, key) => {
      
        return( 
          <div className="ap" key={key}>
            <div className="appp">
              <form onSubmit={handleSubmit(Questao)}>
              
          
                    
              <div>
              <p>{onSubmit.order}</p>
              <p>{onSubmit.enunciation}</p>
              <p>{onSubmit.criterion.name}</p>

             <p>{onSubmit.criterion.description}</p>

             </div>
              
              

           

              <select type="text" {...register("answer")} >
                  <option value=""></option>
                  <option value="Y">Sim</option>
                  <option value="N">Nao</option>
                  <option value="X">Não aplicável</option>
                  <option value="P">Resposta adiada</option>
              </select>
              <input type="text" placeholder="Digite um comentario"{...register("comment")} />
              <input type="hidden" value={onSubmit._id} {...register("question")} />
              <button type="submit" name="_next">
                  Enviar Respostas
                </button>


              




              </form>







            </div>


    
          </div>




        )
      })}
    </div>



        
)

}

export default  Avaliacao

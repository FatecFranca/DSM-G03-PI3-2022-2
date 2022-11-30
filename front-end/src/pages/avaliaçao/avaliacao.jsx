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
    const [onSub, setonSub] = useState([]);
  
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(validationPost)
  })



    const Questao = (data) =>
    axios
      .post("http://localhost:3000/assessment/637d5577a95cbe7ab9e1cc31/answer",data)
      .then(() => {
        navigate("/");
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

      useEffect(() => {
        axios
          .get("http://localhost:3000/criterion")
    
          .then((response) => {
            setonSub(response.data)
            console.log(response.data)
          })
          .catch(() => {});
      }, []);

  


return(
    
 <div>
      <Nav2/> 
     <div className="card">
        
        <div   className="line-post">
        {onSubmit.map((onSubmit, key) => {
            return (
            <div  className="fields"key={key}>
                <div className="questao">
                <p>{onSubmit.order} </p>
                <p>{onSubmit.enunciation}</p>
                </div>

            {onSub.map((onSub, key) => {
            return (
                <div key={key}>
                <p>{onSub.description} </p>
                </div>
                )  
            })}




                
                <div className="resposta">
                    <form onSubmit={handleSubmit(Questao)}>
                        <div className="r1">
                          
                        <input  type="checkbox"   {...register("answer")} value="Y"/>
                        
                        </div>

                        <div  className="r2">
                        <input type="checkbox"  {...register("answer")} value="N" />
                        </div>
                        
                        <div  className="r3">
                        <input type="checkbox"  {...register("answer")} value="X"/>
                        </div>

                        <div  className="r4">
                        <input type="checkbox" {...register("answer")} value="P"/>
                        </div>
                        
                        <div  className="r5">
                        <input  type="text"  name="comment"{...register("comment")}/>
                        <p className="error-message">{errors.comment?.message}</p>
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

import { useContext } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import { useAuth } from "./AuthContext";

const AnswerContext = createContext()

const useAnswer = () => {
    const context = useContext(AnswerContext)
    return context
}

const AnswerProvider = ({ children }) => {
    const { token } = useAuth()

    const createAnswer = ({ assessment, question, objective_answer, comments }) => {
        console.log({ assessment, question, objective_answer, comments })
        // toast.success('Salvo')
        api.post('/answer', { assessment, question, objective_answer, comments }, { headers: { 'x-access-token': token } })
            .then(res => {
                toast.success('Salvo')
            }).catch(err => {
                console.log(err)
                //sempre vai dar erro
                // após entrar na página, redirecionar para a update, pois eh feito o salvamento automaticamente
                toast.error('Ocorreu um problema e sua resposta não foi salva.\nTente logar novamente!')
            })
    }



    return (
        <AnswerContext.Provider value={{ createAnswer }}>
            {children}
        </AnswerContext.Provider>
    )
}

export { AnswerProvider, useAnswer }
import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import api from "../services/api";
import { useAuth } from "./AuthContext";

const QuestionGroupContext = createContext()

const useQuestionGroupContext = () => {
    const context = useContext(QuestionGroupContext)
    return context
}

const QuestionGroupProvider = ({ children }) => {

    const [questionGroup, setQuestionGroup] = useState(
        JSON.parse(localStorage.getItem('@ergoframe:questionGroup'))
    )



    const { token } = useAuth()

    const questionGroupList = async () => {
        api.get('/question-group', { headers: { 'x-access-token': token } })
            .then(res => {

                localStorage.setItem('@ergoframe:questionGroup', JSON.stringify(res.data))
                setQuestionGroup(res.data)
                toast.success('Grupos carregados')

            }).catch(err => {
                toast.error('Tivemos algum problema pedimos desculpas.\nTente realizar seu login novamente!')
            })
    }

    return (
        <QuestionGroupContext.Provider value={{ questionGroupList, questionGroup }}>
            {children}
        </QuestionGroupContext.Provider>
    )
}

export { QuestionGroupProvider, useQuestionGroupContext }
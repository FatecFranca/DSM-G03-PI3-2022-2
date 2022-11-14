import { createContext, useContext, useState } from "react"
import toast from "react-hot-toast"
import { useHistory } from "react-router-dom"
import api from "../services/api"
import { useAuth } from "./AuthContext"

const AssessmentContext = createContext()

const useAssessmentContext = () => {
    const context = useContext(AssessmentContext)
    return context
}

const AssessmentProvider = ({ children }) => {

    const [assessmentList, setAssessmentList] = useState(
        JSON.parse(localStorage.getItem('@ergoframe:assessmentList')) || []
    )

    const history = useHistory()
    const { token, userid } = useAuth()

    const createAssessment = async ({ title, description, url }) => {
        api.post('/assessment', { title, description, url, user: userid }, { headers: { 'x-access-token': token } })
            .then(res => {

                userAssessmenteList()
                toast.success('Nova avaliação cadastrada!')
                history.push(`/groupquestion/${res.data._id}`)
                return res.data._id
            }).catch(err => {

                toast.error('Algo não ocorreu como esperado.\nTente novamente!')
            })

    }

    const userAssessmenteList = async () => {
        api.get('/assessment', { headers: { 'x-access-token': token } })
            .then(res => {

                setAssessmentList(res.data)
                localStorage.setItem('@ergoframe:assessmentList', JSON.stringify(res.data))

                if ((res.data).length > 0)
                    toast.success('Suas avaliações foram carregadas')
                else
                    toast.success('Ainda não temos avaliações.\nComece uma agora mesmo!')

            }).catch(err => {
                toast.error('Algo não ocorreu como esperado.\nTente fazer login novamente!')
            })

    }


    return (
        <AssessmentContext.Provider value={{ createAssessment, userAssessmenteList, assessmentList }}>
            {children}
        </AssessmentContext.Provider>
    )
}

export { AssessmentProvider, useAssessmentContext }
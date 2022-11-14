import jwtDecode from "jwt-decode";
import { useContext, useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import api from "../services/api";

const AuthContext = createContext()

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}

const AuthProvider = ({ children }) => {

    const history = useHistory()

    const [token, setToken] = useState(() => {
        const tokenLocal = localStorage.getItem('@ergoframe:token')
        if (tokenLocal) return tokenLocal
        return ''
    })

    const [userid, setUserid] = useState(() => {
        const useridLocal = localStorage.getItem('@ergoframe:userid')
        if (useridLocal) return useridLocal
        return ''
    })

    const [expirationTime, setExpirationTime] = useState(
        localStorage.getItem('@ergoframe:exp') || ''
    )

    const signUp = ({ fullname, email, password }) => {

        api.post('/user', { fullname, email, password })
            .then(res => {
                toast.success('Cadastro realizado com sucesso')

                const data = {}
                data.email = email
                data.password = password

                signIn(data)
            }).catch(err => {
                toast.error('Algo deu errado.\nTente novamente!')
            })
    }

    const signIn = ({ email, password }) => {

        api.post('/user/login', { email, password })
            .then(res => {
                const decode = jwtDecode(res.data.token)

                setToken(res.data.token)
                setUserid(decode.id)
                setExpirationTime(decode.exp)

                localStorage.setItem('@ergoframe:token', res.data.token)
                localStorage.setItem('@ergoframe:userid', decode.id)
                localStorage.setItem('@ergoframe:exp', decode.exp)

                toast.success('Seja bem vindo ao ErgoFrame')
            }).catch(err => {
                toast.error('Algo não deu certo.\nVerifique se o e-mail e senha estão corretos')
            })
    }

    const signOut = () => {
        localStorage.clear()
        setToken('')
    }

    // const checkTokenValidity = () => {
    //     const agora = new Date().getTime()

    //     if (agora > (expirationTime * 1000)) {
    //         toast.error('Sua sessão expirou.\nRealize um novo login!')
    //         localStorage.clear()
    //         history.push('/')
    //         return ''
    //     }
    //     return ''
    // }

    return (
        <AuthContext.Provider value={{ signIn, token, signOut, signUp, userid }}>
            {children}
        </AuthContext.Provider>
    )
}

export { AuthProvider, useAuth }
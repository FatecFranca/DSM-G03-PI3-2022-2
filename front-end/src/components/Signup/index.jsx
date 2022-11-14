import { ContainerHomeForm } from "../../style/homeFormStyle"
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import Button from "../Button"
import { useState } from "react"
import { useAuth } from "../../providers/AuthContext"


const Signup = ({ setAcesso }) => {

    const [fullnameControll, setfullNameControll] = useState('')
    const [emailControll, setEmailControll] = useState('')
    const [passwordControll, setPasswordControll] = useState('')

    const { signUp } = useAuth()

    const schema = yup.object().shape({
        fullname: yup.string().required('Campo obrigatório'),
        email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
        password: yup.string().required('Campo obrigatório').min(6, 'Sua senha deve conter no mínimo 6 dígitos')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSignup = (data) => {
        signUp(data)
    }

    return (
        <ContainerHomeForm>
            <form onSubmit={handleSubmit(onSignup)}>
                <h3>Cadastre-se</h3>

                <div className='form-floating col-md-10 m-2'>
                    <input
                        type="text" id="floatingInput"
                        className={`form-control ${errors.fullname?.message ? 'is-invalid' : !errors.fullname?.message && fullnameControll ? 'is-valid' : ''}`} placeholder="Seu nome completo" autoFocus  {...register('fullname')}
                        onChange={(e) => setfullNameControll(e.target.value)} />
                    <label for="floatingInput">Seu nome completo</label>
                    {!!errors.fullname?.message ? (<small>{errors.fullname?.message}</small>) : null}
                </div>

                <div className='form-floating col-md-10 m-2'>
                    <input
                        type="text" id="floatingInput"
                        className={`form-control ${errors.email?.message ? 'is-invalid' : !errors.email?.message && emailControll ? 'is-valid' : ''}`} placeholder="Seu e-mail" {...register('email')}
                        onChange={(e) => setEmailControll(e.target.value)} />
                    <label for="floatingInput">Seu e-mail</label>
                    {!!errors.email?.message ? (<small>{errors.email?.message}</small>) : null}
                </div>

                <div className='form-floating col-md-10 m-2'>
                    <input
                        type="password" id="floatingInput"
                        className={`form-control ${errors.password?.message ? 'is-invalid' : !errors.password?.message && passwordControll ? 'is-valid' : ''}`} placeholder="Uma senha segura"  {...register('password')}
                        onChange={(e) => setPasswordControll(e.target.value)} />
                    <label for="floatingInput">Uma senha segura</label>
                    {!!errors.password?.message ? (<small>{errors.password?.message}</small>) : null}
                </div>

                <p>Já é cadastrado? <strong onClick={() => setAcesso(true)}>Acesse sua conta.</strong></p>

                <Button type="submit">Cadastrar</Button>

            </form>

        </ContainerHomeForm>
    )
}

export default Signup

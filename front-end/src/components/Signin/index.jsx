import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '../Button'
import { ContainerHomeForm } from '../../style/homeFormStyle'
import { useAuth } from '../../providers/AuthContext'
import { useState } from 'react'

const Signin = ({ setAcesso }) => {

    const [emailControl, setEmailControl] = useState('')
    const [passwordControl, setPasswordControl] = useState('')
    const { signIn } = useAuth()

    const schema = yup.object().shape({
        email: yup.string().required('campo obrigatório').email('e-mail inválido'),
        password: yup.string().required('campo obrigatório')
    })

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) })

    const onSiginin = (data) => {
        signIn(data)
    }


    return (

        <ContainerHomeForm>
            <form onSubmit={handleSubmit(onSiginin)}>
                <h3>Login</h3>

                <div className='form-floating col-md-10 m-2'>
                    <input
                        type="text" id="floatingInput"
                        className={`form-control ${errors.email?.message ? 'is-invalid' : !errors.email?.message && emailControl ? 'is-valid' : ''}`} placeholder="e-mail" autoFocus  {...register('email')}
                        onChange={(e) => setEmailControl(e.target.value)} />
                    <label for="floatingInput">Seu e-mail</label>
                    {!!errors.email?.message ? (<small>{errors.email?.message}</small>) : null}
                </div>

                <div className='form-floating col-md-10 m-2'>
                    <input type="password" id="floatingInput"
                        className={`form-control ${errors.password?.message ? 'is-invalid' : !errors.password?.message && passwordControl ? 'is-valid' : ''}`} placeholder="senha" autoFocus  {...register('password')}
                        onChange={(e) => setPasswordControl(e.target.value)} />
                    <label for="floatingInput">Sua senha</label>
                    {!!errors.password?.message ? (<small>{errors.password?.message}</small>) : null}
                </div>

                <p>Não é cadastrado? <strong onClick={() => setAcesso(false)}>Inscreva-se.</strong></p>

                <Button type="submit">Entrar</Button>

            </form>
        </ContainerHomeForm>
    )
}

export default Signin
import { ContainerButton } from "./style"

const Button = ({children, ...rest}) => {
    return (
        <ContainerButton {...rest} >
            {children}
        </ContainerButton>
    )
}

export default Button
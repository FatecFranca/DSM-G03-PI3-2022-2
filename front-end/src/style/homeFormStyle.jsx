import styled from 'styled-components'

export const ContainerHomeForm = styled.div`
    padding: 20px;

    form {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    h3{
        text-transform: uppercase;
        font-family: 'Roboto Slab', serif;
        font-weight: 700;
        margin: 25px 0 25px 0;
        font-size: 30px;
    }

    small {
        color: var(--primary-red);
        margin-left: 12px;
    }

    p{
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 14px;

        strong{
            cursor: pointer;
            color: var(--primary-red)
        }
    }

    @media (max-width: 570px) {
        p {
            text-align: center;
        }
        h3 {
            font-size: 20px;
            text-align: center;
        }
    }
`


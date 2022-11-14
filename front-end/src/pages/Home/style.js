import styled from 'styled-components'

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    height: 100%;

    > aside{
        width: 40%;
        min-width: 200px;
        border-radius: var(--radius);
        box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }
`
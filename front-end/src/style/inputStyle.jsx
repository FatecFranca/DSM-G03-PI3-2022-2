import styled from 'styled-components'

export const Input = styled.div`
            border: 0.5px solid var(--gray-200);
            border-radius: 8px;
            width: 100%;
            height: 40px;

            display: flex;
            flex-direction: column;

            margin-bottom: 20px;

            input{
                border: 1px solid #d9d9d9;
                padding: 10px;
                border-radius: var(--radius);
                font-size: 15px; 
            }
            
            input:focus{
                outline: none;
                border: 2px solid var(--secundary-blue);
            }

            input:-webkit-autofill {
                -webkit-box-shadow: 0 0 0px 1000px white inset;
            }

            span{
                color: var(--primary-red-light);
                margin: 10px 12px;
                font-size: 10px;
                transform: translateY(-18px);
            }
`
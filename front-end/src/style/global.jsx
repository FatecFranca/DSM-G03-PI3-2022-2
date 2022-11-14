import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    *{
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 16px;
        font-family: 'Open Sans', sans-serif;
        color: var(--gray-900);
    }

    a{
        text-decoration: none;
    }

    :root{
        --radius: 8px;
        --primary-red-light: #EB5757;
        --primary-red: #B20000;
        --primary-red-dark: #931914;
        --secundary-blue-dark: #005c6e;
        --secundary-blue: rgb(43, 185, 201);
        --secundary-blue-alfa: rgba(43, 185, 201, 0.623);
        
        --gray-0: #F5F5F5;
        --gray-100: #E0E0E0;
        --gray-200: #BDBDBD;
        --gray-300: #828282;
        --gray-900: #333333;

        --white: #f3f3f3;
    }

    button{
        cursor: pointer;
        border: none;
    }
`
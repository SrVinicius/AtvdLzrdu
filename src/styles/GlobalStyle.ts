import {createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
      margin: 0;
      padding: 0;
      box-sizing: border box;
      font-family: Arial, Helvetica, sans-serif;
    }
    :root {
        --main: #a46b14;
        --main-hover: #d0870e;

        --white: #ffffff;
    }
    .container {
        display: flex;
        align-itens: center;
        width: 100%auto;
        max-width:1350px;
        margin: 0 auto;

        @media (max-width: 992px); {
                max-width: 960px;
        }
        @media (max-width: 768px); {
            max-width: 720px;
        }
        @media (max-width: 576px); {
            width: 100%; 
        }
    }
`
    

    



    

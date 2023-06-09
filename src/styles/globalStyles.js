import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after{
        margin:0;
        box-sizing:border-box;
    }

    body{
        background : ${({theme}) => theme.bg2};
        color : ${({theme}) => theme.text};
        font-family: 'Source Sans Pro', sans-serif;
    }
`
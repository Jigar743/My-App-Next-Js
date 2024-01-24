import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: "Bebas Neue", cursive;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    a{
        text-decoration: none;
    }
`;

import styled, { createGlobalStyle } from "styled-components";

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
`;

export const ForgetPasswordStyled = styled.div`
  width: 50%;
  margin: auto;
  /* border: 0.15rem solid #9da2a742; */
  padding: 20px;
  /* border-radius: 20px; */
`;

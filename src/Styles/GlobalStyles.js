import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: Arial, Helvetica;
        background-color:white;
        color:#111;
    }
`;
export default GlobalStyles;
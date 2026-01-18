import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: "Poppins", Arial;
        background-color:white;
        color:#111;
    }
    html{
        scroll-behavior: smooth;
        scroll-padding-top: 4rem;   
    }
`;
export default GlobalStyles;
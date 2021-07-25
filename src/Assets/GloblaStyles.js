import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    text-decoration: none;
}

*,
::before,
::after{
    box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
    background: #333642;
}
`;

export default GlobalStyles;
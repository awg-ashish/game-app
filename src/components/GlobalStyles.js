import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgrey;
    }
    body{
        font-family: 'Open Sans', sans-serif;
    }
    h4{ 
        font-family: 'Montserrat', sans-serif;
        padding: 1rem;
    }
    h3{
        font-size: 2.5rem;
        font-family: 'Press Start 2P', cursive;
        padding: 5rem 1rem;
    }
    p{
        color: #333;
        padding: 0.25rem;
    }
}
`;

export default GlobalStyles;

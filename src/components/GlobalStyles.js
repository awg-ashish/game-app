import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html{
    &::-webkit-scrollbar{
        width: 1rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #999;
        border-radius: 3rem;
    }
    &::-webkit-scrollbar-track {
        background-color: #ccc;
    }
    body{
        font-family: 'Open Sans', sans-serif;
    }
    h4{ 
        font-family: 'Montserrat', sans-serif;
        padding: 1rem 0;
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
@media (max-width: 900px) {
        html{
            h3{
                font-size: 1rem;
            }
        }
    }
`;

export default GlobalStyles;

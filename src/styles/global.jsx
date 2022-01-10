import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    -ms-user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -webkit-tap-highlight-color: transparent;
}

html, body, #root{
    width: 100%;
    height: 100%;
    font-family: 'Nunito Sans', sans-serif;
    background-color: ${props => props.theme.colors.background};
}

.container{
    width: 100%;
    max-width: 1440px;
    padding: 0 4%;
    margin: 0 auto;
}

#root{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 64px 1fr;
    grid-template-areas:
        "header"
        "main"
    ;

    background-color: ${props => props.theme.colors.background};
}

`;
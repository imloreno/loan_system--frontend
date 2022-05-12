import { createGlobalStyle } from "styled-components";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";

const theme = getTheme();

const GlobalStyle = createGlobalStyle`

body{
   background-color: ${theme.background};
   font-family: 'Epilogue', sans-serif;
   font-size: .9rem;
}
main{
   max-width: 65rem;
   margin: 2rem auto;
   padding-left: 2rem;
   padding-right: 2rem;
}
ul{
   margin: 0;
}
li {
   list-style: none;
}
a{
   text-decoration: none;
}
p{
   margin: 0;
}

`;

export default GlobalStyle;

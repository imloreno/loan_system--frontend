import { createGlobalStyle } from "styled-components";
import { getTheme } from "infraestructure/gateways/themeLocalStorage";

const theme = getTheme();

const GlobalStyle = createGlobalStyle`

body{
   background-color: ${theme.background};
   font-size: .9rem;
   -webkit-tap-highlight-color: transparent;
}
main{
   max-width: 65rem;
   margin: 2rem auto;
   padding-left: 2rem;
   padding-right: 2rem;
}
ul{
   margin: 0;
   padding: 0;
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
h1,h2,h4{
   margin-top: 0;
   margin-bottom: 0;
}
`;

export default GlobalStyle;

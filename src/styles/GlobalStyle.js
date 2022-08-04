import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
 ${reset};


 *{

    box-sizing: border-box;
}
 
 html,body{
     padding:0;
     margin:0;
 }

 a{
    text-decoration:none;
}

button{
    background:none;
    border:none;
    cursor:pointer;
}


`;

export default GlobalStyle;

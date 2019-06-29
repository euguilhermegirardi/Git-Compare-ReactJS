import { createGlobalStyle } from 'styled-components';
//import "font-awesome" is inside of the nodule_modules.
import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0; /*Remove the color of the border of the Chrome in the webpages*/
  }

  body {
    background: #9B65E6 !important;
    text-rendering: optimizeLegibility !important; /*The text will be more legible*/
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
  }
`;

//Don't forget the rule: " createGlobalStyle ``; "

export default GlobalStyle;

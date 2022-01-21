import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle` 
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        overflow: hidden;
        touch-action: none;
    }
`;

export default GlobalStyles;

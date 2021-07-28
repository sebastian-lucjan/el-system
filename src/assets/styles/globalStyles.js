import { createGlobalStyle } from 'styled-components';
import './fonts.scss';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *::after, *::before {
    box-sizing: inherit;
  }
  body {
    font-family: 'Work Sans', 'Helvetica Neue', sans-serif;
    margin: 0;
    padding: 0;
    color: #fff;
    background-color: #040705;
    
  }
  a, button {
    font-family: 'Work Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyle;

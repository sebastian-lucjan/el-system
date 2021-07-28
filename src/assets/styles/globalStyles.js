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
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }
  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default GlobalStyle;

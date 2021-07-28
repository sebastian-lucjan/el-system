import { createGlobalStyle } from 'styled-components';
import './fonts.scss';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    font-family: 'Work Sans', 'Helvetica Neue', sans-serif;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.black};
  }

  a, button {
    font-family: 'Work Sans', 'Helvetica Neue', sans-serif;
  }
`;

export default GlobalStyle;

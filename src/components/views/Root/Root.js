import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import StartPage from '../StartPage';
import GlobalStyle from '../../../assets/styles/globalStyles';
import { Wrapper } from './Root.styles';
import About from '../../About/About';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <StartPage />
      <About />
    </Wrapper>
  </ThemeProvider>
);

export default Root;

// TODO: zrobić placeholder dla Slidera zeby "skonczyc" stronę startową
// DONEz: merge firs-page branch to main
// TODO: zrobić "O firmie"
// TODO: wydzielić komponent Button w nawigacji, dodać ::after z mini animacją i cursorem pointerem
// TODO: sciagnac wszystkie ikony potrzebne do zrobienia dzialu oferta

// TODO: jak zrobić tutaj switcha żeby przejść do specyficznego miejsca w stronie (po id ?)

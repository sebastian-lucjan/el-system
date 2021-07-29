import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../assets/styles/theme';
import Page from '../Page';
import GlobalStyle from '../../../assets/styles/globalStyles';
import { Wrapper } from './Root.styles';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Page />
    </Wrapper>
  </ThemeProvider>
);

export default Root;

// TODO: zrobić placeholder dla Slidera zeby "skonczyc" stronę startową
// TODO: merge firs-page branch to main
// TODO: zrobić "O firmie"
// TODO: wydzielić komponent Button w nawigacji, dodać ::after z mini animacją i cursorem pointerem
// TODO: sciagnac wszystkie ikony potrzebne do zrobienia dzialu oferta

// TODO: jak zrobić tutaj switcha żeby przejść do specyficznego miejsca w stronie (po id ?)

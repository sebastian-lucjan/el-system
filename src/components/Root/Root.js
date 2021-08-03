import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../assets/styles/theme';
import StartPage from '../views/StartPage/StartPage';
import GlobalStyle from '../../assets/styles/globalStyles';
import { Wrapper } from './Root.styles';
import AboutPage from '../views/AboutPage/AboutPage';
import Offer from '../views/Offer/Offer';
import Cooperation from '../views/Cooperation/Cooperation';
import Contact from '../views/Contact/Contact';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <StartPage />
      <AboutPage />
      <Offer />
      <Cooperation />
      <Contact />
    </Wrapper>
  </ThemeProvider>
);

export default Root;

// TODO: zrobić placeholder dla Slidera zeby "skonczyc" stronę startową
// DONEz: merge firs-page branch to main
// TODO: zrobić "O firmie"
// TODO: zrobić component Title którego forma zależna jest od propsów (subpage title i hero title)
// TODO: wydzielić komponent Button w nawigacji, dodać ::after z mini animacją i cursorem pointerem
// TODO: sciagnac wszystkie ikony potrzebne do zrobienia dzialu oferta

// TODO: jak zrobić tutaj switcha żeby przejść do specyficznego miejsca w stronie (po id ?)

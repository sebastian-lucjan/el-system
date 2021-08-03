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

// DONE: zrobić placeholder dla Slidera zeby "skonczyc" stronę startową
// DONE: merge firs-page branch to main
// DONE: zrobić "O firmie"
// DONE: zrobić "Współpraca"

// środa
// TODO: sciagnac wszystkie ikony potrzebne do zrobienia dzialu oferta
// TODO: zrobić "Oferta"
// TODO: dodać ::after z mini animacją i cursorem pointerem
// TODO: wydzielić komponent Button w nawigacji,

// czwartek
// TODO: zrobić "Kontakt"
// TODO: zrobić component Title którego forma zależna jest od propsów (subpage title i hero title)
// TODO: dodać plik "todos", uwzględnić w .gitignore

// TODO: jak zrobić tutaj switcha żeby przejść do specyficznego miejsca w stronie (po id ?)
// TODO: add BEM classes

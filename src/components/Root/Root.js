import React from 'react';
import { ThemeProvider } from 'styled-components';
// import { Router } from 'react-router';
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
      {/* <Router> */}
      <StartPage />
      <AboutPage />
      <Offer />
      <Cooperation />
      <Contact />
      {/* </Router> */}
    </Wrapper>
  </ThemeProvider>
);

export default Root;

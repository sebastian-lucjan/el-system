import React, { useState } from 'react';
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
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Root = () => {
  const [pageY, setPageY] = useState(0);

  const handleClick = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleScroll = () => {
    console.log('test');
    setPageY(window.pageYOffset);
  };

  window.onscroll = handleScroll;

  return (
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
        {pageY > 100 && <ScrollToTop onClick={handleClick} />}
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;

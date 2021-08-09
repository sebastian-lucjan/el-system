import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { theme } from '../../assets/styles/theme';
import StartPage from '../views/StartPage/StartPage';
import GlobalStyle from '../../assets/styles/globalStyles';
import { Wrapper } from './Root.styles';
import AboutPage from '../views/AboutPage/AboutPage';
import Offer from '../views/Offer/Offer';
import Cooperation from '../views/Cooperation/Cooperation';
import Contact from '../views/Contact/Contact';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';

// const AppDataContext = React.createContext({});

const Root = () => {
  const [pageY, setPageY] = useState(0);

  const handleScroll = () => {
    setPageY(window.pageYOffset);
  };

  window.onscroll = handleScroll;

  return (
    // <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        {/* <Route> */}
        <Header />
        <StartPage name="home" />
        <AboutPage name="company" />
        <Offer name="offer" />
        <Cooperation name="cooperation" />
        <Contact name="contact" />
        {pageY > 100 && <ScrollToTop to="" />}
        {/* </Route> */}
      </Wrapper>
    </ThemeProvider>
    // </Router>
  );
};

export default Root;

// TODO: replace by react-scroll method

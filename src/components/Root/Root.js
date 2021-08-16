import React, { useEffect, useState } from 'react';
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

const borderMediaValue = 576;

const checkNeedBurgerMenu = () => window.innerWidth < borderMediaValue;
console.log(checkNeedBurgerMenu());

const Root = () => {
  const [pageY, setPageY] = useState(0);
  const [visibleHamburger, setVisibleHamburger] = useState(checkNeedBurgerMenu);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${borderMediaValue}px)`);

    // const handleCrossDeviceBorder = () => setVisibleHamburger;

    mediaQuery.addEventListener('change', () =>
      setVisibleHamburger(checkNeedBurgerMenu())
    );

    return () => {
      mediaQuery.removeEventListener('change', () =>
        setVisibleHamburger(checkNeedBurgerMenu())
      );
    };
  }, [visibleHamburger]);

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
        <Header visibleHamburger={visibleHamburger} />
        <StartPage name="home" visibleSlider={visibleHamburger} />
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

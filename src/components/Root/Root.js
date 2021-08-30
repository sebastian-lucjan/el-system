import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme, size } from '../../assets/styles/theme';
import StartPage from '../views/StartPage/StartPage';
import GlobalStyle from '../../assets/styles/globalStyles';
import { Wrapper } from './Root.styles';
import AboutPage from '../views/AboutPage/AboutPage';
import Offer from '../views/Offer/Offer';
import Cooperation from '../views/Cooperation/Cooperation';
import Contact from '../views/Contact/Contact';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import Header from '../Header/Header';

// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// const AppDataContext = React.createContext({});

const borderMediaValue = size.md;

const checkNeedBurgerMenu = () => window.innerWidth < borderMediaValue;

const Root = () => {
  const [pageY, setPageY] = useState(0);
  const [visibleHamburger, setVisibleHamburger] = useState(checkNeedBurgerMenu);
  const [activeMobileNavigation, setActiveMobileNavigation] = useState(false);

  const handleChangeActiveMobileNav = () => {
    setActiveMobileNavigation(!activeMobileNavigation);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${borderMediaValue}px)`);
    mediaQuery.addEventListener('change', () => {
      setVisibleHamburger(checkNeedBurgerMenu());
    });

    return () => {
      mediaQuery.removeEventListener('change', () => {
        setVisibleHamburger(checkNeedBurgerMenu());
      });
    };
  }, [visibleHamburger]);

  const handleScroll = () => {
    // TODO: better performance ?
    // console.log('handleScroll');
    setPageY(window.pageYOffset);
  };

  window.onscroll = handleScroll;

  const isSliderVisible = () => !visibleHamburger && window.innerWidth >= size.md;
  // TODO: look hear at the condition

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <Header
          visibleHamburger={visibleHamburger}
          handleChangeActiveMobileNav={handleChangeActiveMobileNav}
          mobile={visibleHamburger}
        />
        <StartPage
          name="home"
          visibleSlider={isSliderVisible()}
          activeMobileNavigation={activeMobileNavigation}
          handleChangeActiveMobileNav={handleChangeActiveMobileNav}
        />
        <AboutPage name="company" />
        <Offer name="offer" mobile={visibleHamburger} />
        <Cooperation name="cooperation" />
        <Contact name="contact" mobile={visibleHamburger} />
        {pageY > 100 && <ScrollToTop mobile={visibleHamburger} to="" />}
      </Wrapper>
    </ThemeProvider>
  );
};
export default Root;

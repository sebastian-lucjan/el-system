import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
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
import Cookies from '../Cookies/Cookies';

// const AppDataContext = React.createContext({});

const borderMediaValue = size.width.md;

const checkNeedBurgerMenu = () => window.innerWidth < borderMediaValue;

const Root = () => {
  const [pageY, setPageY] = useState(0);
  const [visibleHamburger, setVisibleHamburger] = useState(checkNeedBurgerMenu);
  const [activeMobileNavigation, setActiveMobileNavigation] = useState(false);
  const [cookiesPopUp, setCookiesPopUp] = useState(
    localStorage.getItem('cookie-notice-accept') !== 'accepted'
  );

  const handleCookiesPolicyAgree = () => {
    localStorage.setItem('cookie-notice-accept', 'accepted');
    setCookiesPopUp(false);
  };

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

  const isSliderVisible = () => !visibleHamburger && window.innerWidth >= size.width.md;
  console.log(cookiesPopUp);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Switch>
            <Route exact path="/">
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
              <AboutPage name="about" />
              <Offer name="offer" mobile={visibleHamburger} />
              <Cooperation name="cooperation" />
              <Contact name="contact" mobile={visibleHamburger} />
              {pageY > 100 && <ScrollToTop mobile={visibleHamburger} to="" />}
              {cookiesPopUp && (
                <Cookies
                  handleCookiesA
                  handleCookiesPolicyAgree={handleCookiesPolicyAgree}
                  handleDismissCookiesPopUp={setCookiesPopUp}
                />
              )}
            </Route>
            <Route to="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};
export default Root;

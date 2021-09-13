import React, { lazy, Suspense, useEffect, useReducer, useState } from 'react';
import debounce from 'lodash.debounce';
import { size } from '../assets/styles/theme';
import Header from '../components/Header/Header';
import StartPage from '../views/StartPage/StartPage';
import Cookies from '../components/Cookies/Cookies';
import { Wrapper } from '../components/Root/Root.styles';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';

const AboutPage = lazy(() => import('../views/AboutPage/AboutPage'));
const Offer = lazy(() => import('../views/Offer/Offer'));
const Cooperation = lazy(() => import('../views/Cooperation/Cooperation'));
const Contact = lazy(() => import('../views/Contact/Contact'));

const borderMediaValue = size.width.md;

const checkNeedBurgerMenu = () => window.innerWidth < borderMediaValue;

export const PageContext = React.createContext({
  visibleHamburger: false,
  mobile: false,
  activeMobileNavigation: false,
  visibleSlider: false,
  handleChangeActiveMobileNav: () => {},
  handleCookiesPolicyAgree: () => {},
  handleDismissCookiesPopUp: () => {},
});

const mainInitialState = {
  pageY: 0,
  visibleHamburger: checkNeedBurgerMenu(),
  activeMobileNavigation: false,
  cookiesPopUp: localStorage.getItem('cookie-notice-accept') !== 'accepted',
};

const mainReducerActionTypes = {
  setPageY: 'setPageY',
  visibleHamburger: 'visibleHamburger',
  activeMobileNavigation: 'activeMobileNavigation',
  cookiesPopUp: 'cookiesPopUp',
};

const mainReducer = (state, action) => {
  const { setPageY, visibleHamburger, activeMobileNavigation, cookiesPopUp } = mainReducerActionTypes;

  switch (action.type) {
    case setPageY:
      return { ...state, pageY: window.pageYOffset };
    case visibleHamburger:
      return { ...state, visibleHamburger: checkNeedBurgerMenu() };
    case activeMobileNavigation:
      return { ...state, activeMobileNavigation: !state.activeMobileNavigation };
    case cookiesPopUp:
      return { ...state, cookiesPopUp: false };

    default:
      return state;
  }
};

const MainTemplate = () => {
  const [mainState, dispatch] = useReducer(mainReducer, mainInitialState);

  const handleCookiesPolicyAgree = () => {
    localStorage.setItem('cookie-notice-accept', 'accepted');
    dispatch({ type: mainReducerActionTypes.cookiesPopUp });
  };

  const handleChangeActiveMobileNav = () => {
    dispatch({ type: mainReducerActionTypes.activeMobileNavigation });
  };

  const handleDismissCookiesPopUp = () => {
    dispatch({ type: mainReducerActionTypes.cookiesPopUp });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${borderMediaValue}px)`);
    mediaQuery.addEventListener('change', () => {
      dispatch({ type: mainReducerActionTypes.visibleHamburger });
    });

    return () => {
      mediaQuery.removeEventListener('change', () => {
        dispatch({ type: mainReducerActionTypes.visibleHamburger });
      });
    };
  }, [mainState.visibleHamburger]);

  const handleScroll = () => dispatch({ type: 'setPageY' });

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 50));
    return () => window.removeEventListener('scroll', debounce(handleScroll));
  }, [mainState.pageY]);

  const isSliderVisible = () => !mainState.visibleHamburger && window.innerWidth >= size.width.md;

  return (
    <PageContext.Provider
      value={{
        mobile: mainState.visibleHamburger,
        visibleHamburger: mainState.visibleHamburger,
        handleChangeActiveMobileNav,
        activeMobileNavigation: mainState.activeMobileNavigation,
        handleCookiesPolicyAgree,
        handleDismissCookiesPopUp,
        visibleSlider: isSliderVisible(),
      }}
    >
      <Wrapper>
        <Suspense fallback={<div>loading</div>}>
          <Header />
          <StartPage />
          <AboutPage />
          <Offer />
          <Cooperation />
          <Contact />
          {mainState.pageY > 100 && <ScrollToTop to="" />}
        </Suspense>
        {mainState.cookiesPopUp && <Cookies />}
      </Wrapper>
    </PageContext.Provider>
  );
};

export default MainTemplate;

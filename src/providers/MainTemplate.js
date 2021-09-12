import React, { lazy, Suspense, useEffect, useState } from 'react';
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

const MainTemplate = () => {
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

  const handleScroll = () => setPageY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 50));
    return () => window.removeEventListener('scroll', throttle(handleScroll));
  }, [pageY]);

  const isSliderVisible = () => !visibleHamburger && window.innerWidth >= size.width.md;

  return (
    <PageContext.Provider
      value={{
        mobile: visibleHamburger,
        visibleHamburger,
        handleChangeActiveMobileNav,
        activeMobileNavigation,
        handleCookiesPolicyAgree,
        handleDismissCookiesPopUp: setCookiesPopUp,
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
          {pageY > 100 && <ScrollToTop to="" />}
        </Suspense>
        {cookiesPopUp && <Cookies />}
      </Wrapper>
    </PageContext.Provider>
  );
};

export default MainTemplate;

import React, { lazy, Suspense, createContext } from 'react';
import Header from '../components/Header/Header';
import StartPage from '../views/StartPage/StartPage';
import Cookies from '../components/Cookies/Cookies';
import { Wrapper } from '../components/Root/Root.styles';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { initialPageContextValue } from '../data/pageContextData';
import { useCookies } from '../hooks/useCookies';
import { useCurrentY } from '../hooks/useCurrentY';
import { useIsActive } from '../hooks/useIsActive';

const AboutPage = lazy(() => import('../views/AboutPage/AboutPage'));
const Offer = lazy(() => import('../views/Offer/Offer'));
const Cooperation = lazy(() => import('../views/Cooperation/Cooperation'));
const Contact = lazy(() => import('../views/Contact/Contact'));

export const PageContext = createContext(initialPageContextValue);

const MainTemplate = () => {
  const { isActiveCookiePopUp, handleCookiesPolicyAgree, handleDismissCookiesPopUp } = useCookies();
  const { isVisibleHamburger, isSliderVisible, isActiveMobileNavigation, handleChangeActiveMobileNav } = useIsActive();
  const currentPositionY = useCurrentY();

  return (
    <PageContext.Provider
      value={{
        mobile: isVisibleHamburger,
        isVisibleHamburger,
        handleChangeActiveMobileNav,
        isActiveMobileNavigation,
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
          {currentPositionY > 100 && <ScrollToTop to="" />}
        </Suspense>
        {isActiveCookiePopUp && <Cookies />}
      </Wrapper>
    </PageContext.Provider>
  );
};

export default MainTemplate;

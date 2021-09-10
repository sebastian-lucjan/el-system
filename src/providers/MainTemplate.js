import React, { useEffect, useState } from 'react';
import { size } from '../assets/styles/theme';
import Header from '../components/Header/Header';
import StartPage from '../components/views/StartPage/StartPage';
import AboutPage from '../components/views/AboutPage/AboutPage';
import Offer from '../components/views/Offer/Offer';
import Cooperation from '../components/views/Cooperation/Cooperation';
import Contact from '../components/views/Contact/Contact';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import Cookies from '../components/Cookies/Cookies';
import { Wrapper } from '../components/Root/Root.styles';

const borderMediaValue = size.width.md;

const checkNeedBurgerMenu = () => window.innerWidth < borderMediaValue;

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

  const handleScroll = () => {
    // TODO: better performance ?
    // console.log('handleScroll');
    setPageY(window.pageYOffset);
  };

  window.onscroll = handleScroll;

  const isSliderVisible = () => !visibleHamburger && window.innerWidth >= size.width.md;

  return (
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
    </Wrapper>
  );
};

export default MainTemplate;

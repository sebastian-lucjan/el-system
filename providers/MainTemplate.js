import useCurrentY from 'hooks/useCurrentY';
import useCookies from 'hooks/useCookies';
import { useIsActive } from 'hooks/useIsActive';
import PageContext from 'data/pageContextData';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('components/Header/Header'));
const StartPage = dynamic(() => import('views/StartPage/StartPage'));
const AboutPage = dynamic(() => import('views/AboutPage/AboutPage'));
const Offer = dynamic(() => import('views/Offer/Offer'));
const Cooperation = dynamic(() => import('views/Cooperation/Cooperation'));
const Contact = dynamic(() => import('views/Contact/Contact'));
const ScrollToTop = dynamic(() => import('components/ScrollToTop/ScrollToTop'));
const Cookies = dynamic(() => import('components/Cookies/Cookies'));

const MainTemplate = () => {
  const { isActiveCookiePopUp, handleCookiesPolicyAgree, handleDismissCookiesPopUp } = useCookies();
  const { isVisibleHamburger, isSliderVisible, isActiveMobileNavigation, handleChangeActiveMobileNav } = useIsActive();
  const currentPositionY = useCurrentY();

  const providedObject = {
    mobile: isVisibleHamburger,
    isVisibleHamburger,
    isActiveMobileNavigation,
    visibleSlider: isSliderVisible,
    handleChangeActiveMobileNav,
    handleCookiesPolicyAgree,
    handleDismissCookiesPopUp,
  };

  return (
    <PageContext.Provider value={providedObject}>
      <Header />
      <StartPage />
      <AboutPage />
      <Offer />
      <Cooperation />
      <Contact />
      {currentPositionY > 100 && <ScrollToTop to="" />}
      {isActiveCookiePopUp && <Cookies />}
    </PageContext.Provider>
  );
};

export default MainTemplate;

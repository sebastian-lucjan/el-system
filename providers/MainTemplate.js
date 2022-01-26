import AboutPage from 'views/AboutPage/AboutPage';
import Offer from 'views/Offer/Offer';
import Cooperation from 'views/Cooperation/Cooperation';
import Contact from 'views/Contact/Contact';
import Header from '../components/Header/Header';
import ScrollToTop from '../components/ScrollToTop/ScrollToTop';
import { useCurrentY } from '../hooks/useCurrentY';
import { useCookies } from '../hooks/useCookies';
import { useIsActive } from '../hooks/useIsActive';
import { PageContext } from '../data/pageContextData';
import StartPage from '../views/StartPage/StartPage';
import Cookies from '../components/Cookies/Cookies';

const MainTemplate = () => {
  const { isActiveCookiePopUp, handleCookiesPolicyAgree, handleDismissCookiesPopUp } = useCookies();
  const { isVisibleHamburger, isSliderVisible, isActiveMobileNavigation, handleChangeActiveMobileNav } = useIsActive();
  const currentPositionY = useCurrentY();

  const providedObject = {
    mobile: isVisibleHamburger,
    isVisibleHamburger,
    handleChangeActiveMobileNav,
    isActiveMobileNavigation,
    handleCookiesPolicyAgree,
    handleDismissCookiesPopUp,
    visibleSlider: isSliderVisible(),
  };

  return (
    <PageContext.Provider value={providedObject}>
      <Header />
      <StartPage />
      {/* <AboutPage /> */}
      {/* <Offer /> */}
      {/* <Cooperation /> */}
      {/* <Contact /> */}
      {/* {currentPositionY > 100 && <ScrollToTop to="" />} */}
      {/* {isActiveCookiePopUp && <Cookies />} */}
    </PageContext.Provider>
  );
};

export default MainTemplate;

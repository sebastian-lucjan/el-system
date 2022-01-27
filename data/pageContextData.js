import { createContext } from 'react';

const initialPageContextValue = {
  visibleHamburger: false,
  mobile: false,
  activeMobileNavigation: false,
  visibleSlider: false,
  handleChangeActiveMobileNav: () => {},
  handleCookiesPolicyAgree: () => {},
  handleDismissCookiesPopUp: () => {},
};

const PageContext = createContext(initialPageContextValue);

export default PageContext;

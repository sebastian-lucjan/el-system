import { createContext } from 'react';

const initialPageContextValue = {
  mobile: false,
  isVisibleHamburger: false,
  isActiveMobileNavigation: false,
  visibleSlider: false,
  handleChangeActiveMobileNav: () => {},
  handleCookiesPolicyAgree: () => {},
  handleDismissCookiesPopUp: () => {},
};

const PageContext = createContext(initialPageContextValue);

export default PageContext;

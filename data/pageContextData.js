import { createContext } from 'react';

export const initialPageContextValue = {
  visibleHamburger: false,
  mobile: false,
  activeMobileNavigation: false,
  visibleSlider: false,
  handleChangeActiveMobileNav: () => {},
  handleCookiesPolicyAgree: () => {},
  handleDismissCookiesPopUp: () => {},
};

export const PageContext = createContext(initialPageContextValue);

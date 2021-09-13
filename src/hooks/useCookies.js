import { useState } from 'react';
import { mainInitialState } from '../data/mainReducerData';

export const useCookies = () => {
  const [isActiveCookiePopUp, setIsActiveCookiePopUp] = useState(mainInitialState.cookiesPopUp);

  const handleDismissCookiesPopUp = () => setIsActiveCookiePopUp(false);

  const handleCookiesPolicyAgree = () => {
    localStorage.setItem('cookie-notice-accept', 'accepted');
    handleDismissCookiesPopUp();
  };

  return { isActiveCookiePopUp, handleCookiesPolicyAgree, handleDismissCookiesPopUp };
};

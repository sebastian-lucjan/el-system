const SSRcondition = typeof window !== 'undefined';

export const mainInitialState = {
  pageY: 0,
  isVisibleHamburger: true,
  isActiveMobileNavigation: false,
  cookiesPopUp: SSRcondition ? localStorage.getItem('cookie-notice-accept') !== 'accepted' : null,
};

export const mainReducerActionTypes = {
  isVisibleHamburger: 'isVisibleHamburger',
  isActiveMobileNavigation: 'isActiveMobileNavigation',
};

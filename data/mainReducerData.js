import { checkNeedBurgerMenu } from '../helpers/mainTemplate';

const SSRcondition = typeof window !== 'undefined';

export const mainInitialState = {
  pageY: 0,
  isVisibleHamburger: checkNeedBurgerMenu(),
  isActiveMobileNavigation: false,
  cookiesPopUp: SSRcondition ? localStorage.getItem('cookie-notice-accept') !== 'accepted' : null,
};

export const mainReducerActionTypes = {
  isVisibleHamburger: 'isVisibleHamburger',
  isActiveMobileNavigation: 'isActiveMobileNavigation',
};

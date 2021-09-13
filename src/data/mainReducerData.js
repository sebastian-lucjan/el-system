import { checkNeedBurgerMenu } from '../helpers/mainTemplate';

export const mainInitialState = {
  pageY: 0,
  isVisibleHamburger: checkNeedBurgerMenu(),
  isActiveMobileNavigation: false,
  cookiesPopUp: localStorage.getItem('cookie-notice-accept') !== 'accepted',
};

export const mainReducerActionTypes = {
  isVisibleHamburger: 'isVisibleHamburger',
  isActiveMobileNavigation: 'isActiveMobileNavigation',
};

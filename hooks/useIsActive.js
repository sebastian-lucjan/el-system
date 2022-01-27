import { useReducer } from 'react';
import { useMedia } from 'use-media';
import checkNeedBurgerMenu from 'helpers/mainTemplate';
import { mainInitialState, mainReducerActionTypes } from 'data/mainReducerData';
import { size } from 'styles/theme';

export const mainReducer = (state, action) => {
  const { isVisibleHamburger, isActiveMobileNavigation } = mainReducerActionTypes;

  switch (action.type) {
    case isVisibleHamburger:
      return { ...state, isVisibleHamburger: checkNeedBurgerMenu() };
    case isActiveMobileNavigation:
      return { ...state, isActiveMobileNavigation: !state.isActiveMobileNavigation };
    default:
      return state;
  }
};

export const useIsActive = () => {
  const [mainState, dispatch] = useReducer(mainReducer, mainInitialState);

  const isSliderVisible = checkNeedBurgerMenu();

  const handleChangeActiveMobileNav = () => {
    dispatch({ type: mainReducerActionTypes.isActiveMobileNavigation });
  };

  const isVisibleHamburger = useMedia({ maxWidth: size.width.md });
  const { isActiveMobileNavigation } = mainState;

  return { isVisibleHamburger, isSliderVisible, isActiveMobileNavigation, handleChangeActiveMobileNav };
};

import { useEffect, useReducer } from 'react';
import { useMedia } from 'use-media';
import { borderMediaValue, checkNeedBurgerMenu } from 'helpers/mainTemplate';
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

  const isSliderVisible = useMedia({ minWidth: size.width.md });

  const handleChangeActiveMobileNav = () => {
    dispatch({ type: mainReducerActionTypes.isActiveMobileNavigation });
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${borderMediaValue}px)`);
    mediaQuery.addEventListener('change', () => {
      dispatch({ type: mainReducerActionTypes.isVisibleHamburger });
    });

    return () => {
      mediaQuery.removeEventListener('change', () => {
        dispatch({ type: mainReducerActionTypes.isVisibleHamburger });
      });
    };
  }, [mainState.isVisibleHamburger]);

  const { isActiveMobileNavigation, isVisibleHamburger } = mainState;

  return { isVisibleHamburger, isSliderVisible, isActiveMobileNavigation, handleChangeActiveMobileNav };
};

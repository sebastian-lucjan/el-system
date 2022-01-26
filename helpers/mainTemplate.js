import { size } from '../styles/theme';

export const borderMediaValue = size.width.md;

export const checkNeedBurgerMenu = () => {
  if (typeof window !== 'undefined') {
    return window?.innerWidth < borderMediaValue;
  }
  return null; // todo: check if it works
};

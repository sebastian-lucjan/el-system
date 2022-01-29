import { size } from 'styles/theme';
import { useMedia } from 'use-media';

const checkNeedBurgerMenu = () => useMedia({ minWidth: size.width.md });

export default checkNeedBurgerMenu;

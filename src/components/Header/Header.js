import React from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Wrapper } from './Header.styles';

const Header = ({ visibleHamburger }) => (
  <Wrapper>
    <Logo />
    <Navigation visibleHamburger={visibleHamburger} />
  </Wrapper>
);

export default Header;

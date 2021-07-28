import React from 'react';
import Logo from '../Logo';
import Navigation from '../Navigation/Navigation';
import { Wrapper } from './Header.styles';

const Header = () => (
  <Wrapper>
    <Logo />
    <Navigation />
  </Wrapper>
);

export default Header;

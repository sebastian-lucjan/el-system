import React from 'react';
import { PropTypes } from 'prop-types';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import { Wrapper } from './Header.styles';

const Header = ({ visibleHamburger, handleChangeActiveMobileNav, mobile }) => (
  <Wrapper>
    <Logo />
    <Navigation
      visibleHamburger={visibleHamburger}
      handleChangeActiveMobileNav={handleChangeActiveMobileNav}
      mobile={mobile}
    />
  </Wrapper>
);

Header.propTypes = { visibleHamburger: PropTypes.bool.isRequired };

export default Header;

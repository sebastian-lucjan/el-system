import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation, StyledNavLink } from './Navigation.styles';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';

const Navigation = ({
  visibleHamburger,
  handleChangeActiveMobileNav,
  activeMobileNavigation,
}) => {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);

  const { navigation: buttonsDataArray } = websiteData;

  const navButtons = buttonsDataArray.map(({ buttonText, path, name }) => (
    <StyledNavLink
      to={name}
      spy
      smooth
      duration={isActiveMobileNav ? 0 : 800}
      key={buttonText}
      onClick={() => {
        handleChangeActiveMobileNav();
        setIsActiveMobileNav(!isActiveMobileNav);
      }}
    >
      {buttonText}
    </StyledNavLink>
  ));

  return (
    <>
      {visibleHamburger && (
        <HamburgerSqueeze
          barColor="white"
          isActive={isActiveMobileNav}
          buttonHeight={24}
          buttonStyle={{ padding: '20px' }}
          onClick={() => {
            handleChangeActiveMobileNav();
            setIsActiveMobileNav(!isActiveMobileNav);
          }}
        />
      )}
      {isActiveMobileNav && <StyledNavigation>{navButtons}</StyledNavigation>}
    </>
  );
};

Navigation.propTypes = { visibleHamburger: PropTypes.bool.isRequired };

export default Navigation;

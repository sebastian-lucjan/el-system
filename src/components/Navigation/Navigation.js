import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation, StyledNavLink } from './Navigation.styles';

const Navigation = ({
  visibleHamburger,
  handleChangeActiveMobileNav,
  mobile: mobileDevice,
}) => {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { navigation: buttonsDataArray } = websiteData;

  const navButtons = buttonsDataArray.map(({ buttonText, path, name }) => (
    <StyledNavLink
      to={name}
      spy
      smooth
      duration={mobileDevice && isActiveMobileNav ? 0 : 800}
      key={buttonText}
      onClick={() => {
        handleChangeActiveMobileNav();
        setIsActiveMobileNav(!isActiveMobileNav);
      }}
    >
      {buttonText}
    </StyledNavLink>
  ));

  // useEffect(() => {
  //   const mediaQuery = window.matchMedia(`(min-width: ${borderMediaValue}px)`);
  //   mediaQuery.addEventListener('change', () => {
  //     setVisibleHamburger(checkNeedBurgerMenu());
  //   });
  //
  //   return () => {
  //     mediaQuery.removeEventListener('change', () => {
  //       setVisibleHamburger(checkNeedBurgerMenu());
  //     });
  //   };
  // }, [visibleHamburger]);

  const setHamburgerWith = () => {
    // const windowWidth = window.innerWidth;
    // console.log(windowWidth); // TODO: handle Hamburger icon resizing
  };

  setHamburgerWith();

  return (
    <>
      {visibleHamburger && (
        <HamburgerSqueeze
          barColor="white"
          isActive={isActiveMobileNav}
          buttonWidth={32}
          buttonStyle={{ padding: '20px 20px' }}
          onClick={() => {
            handleChangeActiveMobileNav();
            setIsActiveMobileNav(!isActiveMobileNav);
          }}
        />
      )}
      {(isActiveMobileNav || !mobileDevice) && (
        <StyledNavigation>{navButtons}</StyledNavigation>
      )}
    </>
  );
};

Navigation.propTypes = { visibleHamburger: PropTypes.bool.isRequired };

export default Navigation;

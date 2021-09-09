import React, { useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation, StyledNavLink } from './Navigation.styles';

import { simulateClick } from '../../helpers/simulateClick';

const Navigation = ({ visibleHamburger, handleChangeActiveMobileNav, mobile: mobileDevice }) => {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);
  const { navigation: buttonsDataArray } = websiteData;

  const navLinkRef = useRef(null); // ref necessary for focus -> enter action

  const navButtons = buttonsDataArray.map(({ buttonText, name }, index) => (
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
      tabIndex={index + 1}
      ref={navLinkRef}
      onKeyDown={(e) => simulateClick(e, navLinkRef, name)}
    >
      {buttonText}
    </StyledNavLink>
  ));

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
      {(isActiveMobileNav || !mobileDevice) && <StyledNavigation>{navButtons}</StyledNavigation>}
    </>
  );
};

Navigation.defaultProps = { handleChangeActiveMobileNav: () => {}, mobile: false };

Navigation.propTypes = {
  visibleHamburger: PropTypes.bool.isRequired,
  handleChangeActiveMobileNav: PropTypes.func,
  mobile: PropTypes.bool,
};

export default Navigation;

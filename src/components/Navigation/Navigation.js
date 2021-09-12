import React, { useContext, useRef, useState } from 'react';
import { PropTypes } from 'prop-types';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation, StyledNavLink } from './Navigation.styles';

import { simulateClick } from '../../helpers/simulateClick';
import { PageContext } from '../../providers/MainTemplate';

const Navigation = () => {
  const [isActiveMobileNav, setIsActiveMobileNav] = useState(false);
  const { navigation: buttonsDataArray } = websiteData;

  const {
    visibleHamburger,
    handleChangeActiveMobileNav,
    mobile: mobileDevice,
  } = useContext(PageContext);

  const navLinkRef = useRef(null); // ref necessary for focus -> enter action

  const navButtons = buttonsDataArray.map(({ buttonText, name }) => (
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
      tabIndex={0}
      ref={navLinkRef}
      onKeyDown={(e) => simulateClick(e, navLinkRef, name)}
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

export default Navigation;

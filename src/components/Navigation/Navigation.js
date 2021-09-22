import { useContext, useRef } from 'react';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation, StyledNavLink } from './Navigation.styles';

import { simulateClick } from '../../helpers/simulateClick';
import { PageContext } from '../../providers/MainTemplate';

const Navigation = () => {
  const { navigation: buttonsDataArray } = websiteData;

  const {
    isVisibleHamburger,
    isActiveMobileNavigation,
    handleChangeActiveMobileNav,
    mobile: mobileDevice,
  } = useContext(PageContext);

  const navLinkRef = useRef(null); // ref necessary for focus -> enter action

  const navButtons = buttonsDataArray.map(({ buttonText, name }) => (
    <StyledNavLink
      to={name}
      spy
      smooth
      duration={mobileDevice && isActiveMobileNavigation ? 0 : 800}
      key={buttonText}
      onClick={() => {
        handleChangeActiveMobileNav();
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
      {isVisibleHamburger && (
        <HamburgerSqueeze
          barColor="white"
          isActive={isActiveMobileNavigation}
          buttonWidth={32}
          buttonStyle={{ padding: '20px 20px' }}
          onClick={() => handleChangeActiveMobileNav()}
        />
      )}
      {(isActiveMobileNavigation || !mobileDevice) && <StyledNavigation>{navButtons}</StyledNavigation>}
    </>
  );
};

export default Navigation;

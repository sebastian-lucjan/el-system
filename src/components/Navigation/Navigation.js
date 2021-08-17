import React, { useCallback, useState } from 'react';
import { PropTypes } from 'prop-types';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation, StyledNavLink } from './Navigation.styles';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';

const Navigation = ({ visibleHamburger }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  // useEffect(() => {}, [isActive]);

  useLockBodyScroll();

  const { navigation: buttonsDataArray } = websiteData;

  const navButtons = buttonsDataArray.map(({ buttonText, path, name }) => (
    <StyledNavLink to={name} spy smooth duration={800} key={buttonText}>
      {buttonText}
    </StyledNavLink>
  ));

  return (
    <>
      {visibleHamburger ? (
        <HamburgerIcon toggleButton={toggleButton} isActive={isActive} />
      ) : (
        <StyledNavigation>{navButtons}</StyledNavigation>
      )}
    </>
  );
};

Navigation.propTypes = { visibleHamburger: PropTypes.bool.isRequired };

export default Navigation;

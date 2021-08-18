import React, { useCallback, useState } from 'react';
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
  const [isActive, setIsActive] = useState(false); // TODO: przesuń to do root i tam daj stan

  const toggleButton = useCallback(
    () => setIsActive((prevState) => !prevState),
    []
  );

  // useEffect(() => {}, [isActive]);
  // console.log(handleChangeActiveMobileNav);
  // if (visibleHamburger) {
  // useLockBodyScroll(); // todo: odblokuj po kliknieciu w nawigacje
  // }

  const { navigation: buttonsDataArray } = websiteData;

  const navButtons = buttonsDataArray.map(({ buttonText, path, name }) => (
    <StyledNavLink
      to={name}
      spy
      smooth
      duration={800}
      key={buttonText}
      onClick={() => {
        handleChangeActiveMobileNav();
        setIsActive(!isActive);
      }}
    >
      {buttonText}
    </StyledNavLink>
  ));

  return (
    <>
      {visibleHamburger ? (
        <HamburgerSqueeze
          barColor="white"
          isActive={isActive}
          buttonHeight={24}
          buttonStyle={{ padding: '20px' }}
          onClick={() => {
            handleChangeActiveMobileNav();
            setIsActive(!isActive);
          }}
        />
      ) : (
        <StyledNavigation>{navButtons}</StyledNavigation>
      )}
    </>
  );
};

Navigation.propTypes = { visibleHamburger: PropTypes.bool.isRequired };

export default Navigation;

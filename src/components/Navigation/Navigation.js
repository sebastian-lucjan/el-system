import React from 'react';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation, StyledNavLink } from './Navigation.styles';

const Navigation = ({ visibleHamburger }) => {
  const { navigation: buttonsDataArray } = websiteData;
  const navButtons = buttonsDataArray.map(({ buttonText, path, name }) => (
    <StyledNavLink to={name} spy smooth duration={800} key={buttonText}>
      {buttonText}
    </StyledNavLink>
  ));

  return (
    <StyledNavigation>
      {visibleHamburger ? <div>|||</div> : navButtons}
    </StyledNavigation>
  );
};

export default Navigation;

import React from 'react';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation, StyledNavLink } from './Navigation.styles';

const Navigation = () => {
  const { navigation: buttonsDataArray } = websiteData;
  const navButtons = buttonsDataArray.map(({ buttonText, path }) => (
    <StyledNavLink exact to={path} key={buttonText}>
      {buttonText}
    </StyledNavLink>
  ));

  return <StyledNavigation>{navButtons}</StyledNavigation>;
};

export default Navigation;

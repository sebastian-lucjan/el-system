import React from 'react';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation } from './Navigation.styles';

const Navigation = () => {
  const { navigation: buttonTitles } = websiteData;
  const navButtons = buttonTitles.map((buttonTitle) => (
    <div key={buttonTitle} className="navigation__button">
      {buttonTitle}
    </div>
  ));

  return <StyledNavigation>{navButtons}</StyledNavigation>;
};

export default Navigation;

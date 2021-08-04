import React from 'react';
import { websiteData } from '../../data/appTextData';
import { StyledNavigation } from './Navigation.styles';
import Button from '../Button/Button';

const Navigation = () => {
  const { navigation: buttonTitles } = websiteData;
  const navButtons = buttonTitles.map((buttonTitle) => (
    <Button
      key={buttonTitle}
      title={buttonTitle}
      className="navigation__button"
    >
      {buttonTitle}
    </Button>
  ));

  return <StyledNavigation>{navButtons}</StyledNavigation>;
};

export default Navigation;

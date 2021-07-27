import React from 'react';
import { websiteData } from '../data/appTextData';

const Navigation = () => {
  const { navigation: buttonTitles } = websiteData;
  const navButtons = buttonTitles.map((buttonTitle) => (
    <div key={buttonTitle} className="navigation__button">
      {buttonTitle}
    </div>
  ));

  return navButtons;
};

export default Navigation;

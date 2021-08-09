import React from 'react';
import StyledHeroImageButton from './HeroButton.styles';
import { websiteData } from '../../data/appTextData';

const HeroImageButton = () => {
  const {
    buttons: { sliderBtn: buttonText },
  } = websiteData;

  return <StyledHeroImageButton>{buttonText}</StyledHeroImageButton>;
};

export default HeroImageButton;

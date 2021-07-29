import React from 'react';
import HeroImageTitle from '../HeroImageTitle/HeroImageTitle';
import StyledHeroText from './HeroText.styles';
import HeroImageDescription from '../HeroImageDescription/HeroImageDescription';

const HeroText = () => (
  <StyledHeroText>
    <HeroImageTitle />
    <HeroImageDescription />
  </StyledHeroText>
);

export default HeroText;

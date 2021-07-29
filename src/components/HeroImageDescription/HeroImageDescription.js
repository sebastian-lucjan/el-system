import React from 'react';
import { elSystemInfo } from '../../data/appTextData';
import StyledHeroImageDescription from './HeroImageDescription.styles';

const HeroImageDescription = () => (
  <StyledHeroImageDescription>
    {elSystemInfo.offers[7].description}
  </StyledHeroImageDescription>
);

export default HeroImageDescription;

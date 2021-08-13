import React from 'react';
import { elSystemInfo } from '../../data/appTextData';
import StyledHeroImageDescription from './HeroImageDescription.styles';

const HeroImageDescription = ({ description }) => (
  <StyledHeroImageDescription>{description}</StyledHeroImageDescription>
);

export default HeroImageDescription;

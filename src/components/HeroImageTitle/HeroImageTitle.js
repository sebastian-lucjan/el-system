import React from 'react';
import StyledHeroImageTitle from './HeroImageTitle.styles';

const HeroImageTitle = ({ headline }) => (
  <StyledHeroImageTitle>{headline.toUpperCase()}</StyledHeroImageTitle>
);

export default HeroImageTitle;

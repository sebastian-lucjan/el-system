import React from 'react';
// import { elSystemInfo } from '../../data/appTextData';
import StyledHeroImageTitle from './HeroImageTitle.styles';

const HeroImageTitle = ({ headline }) => (
  <StyledHeroImageTitle>{headline.toUpperCase()}</StyledHeroImageTitle>
);

export default HeroImageTitle;

/* TODO: zmieniajaca sie wielkosc czcionki w zaleznosci od dlugosci tekstu
 */

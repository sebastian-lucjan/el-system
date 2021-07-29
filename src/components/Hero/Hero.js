import React from 'react';
import StyledHero from './Hero.styles';
import HeroImage from '../HeroImage/HeroImage';

const Hero = () => (
  <StyledHero>
    <HeroInfo />
    <HeroImage />
  </StyledHero>
);

export default Hero;

/*
  todo: propsy sterujace wewnetrznymi componentami -> 'slider',
   - update po zmianie wartosci - zmiana obrazka i informacji,
   - poszukaj gotowych sliderow na poczatek zrob placeholder
*/

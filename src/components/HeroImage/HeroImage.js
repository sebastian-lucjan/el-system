import React from 'react';
import StyledHeroImage from './HeroImage.styles';
import testImage from '../../../public/images/photovoltaic-power.jpeg';

const HeroImage = () => (
  <StyledHeroImage>
    {/* <img src= alt="test" /> */}
    <img src={testImage} alt="fotowoltaika" />
    {/* <div className="imgPlaceholder" /> */}
  </StyledHeroImage>
);

export default HeroImage;

// TODO: add alts to images

import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderIndexContext from 'context/sliderIndexContext';
import HeroImage from 'components/HeroImage/HeroImage';
import HeroInfo from 'components/HeroInfo/HeroInfo';
import StyledHero from './Hero.styles';

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <SliderIndexContext.Provider value={{ slideIndex, setSlideIndex }}>
      <StyledHero>
        <HeroInfo />
        <HeroImage />
      </StyledHero>
    </SliderIndexContext.Provider>
  );
};

export default Hero;

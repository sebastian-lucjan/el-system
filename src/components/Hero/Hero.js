import React, { useState } from 'react';
import StyledHero from './Hero.styles';
import HeroImage from '../HeroImage/HeroImage';
import HeroInfo from '../HeroInfo/HeroInfo';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { elSystemInfo } from '../../data/appTextData';

export const SliderIndexContext = React.createContext(0);

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const {
    offer: { offers: services },
  } = elSystemInfo;

  const servicesToSlider = services.filter((service) => service.hasSlide);

  const handleChangeSlideIndex = (newIndex) => setSlideIndex(newIndex);

  return (
    <SliderIndexContext.Provider value={slideIndex}>
      <StyledHero>
        <HeroInfo servicesToSlider={servicesToSlider} />
        <HeroImage handleChangeSlideIndex={handleChangeSlideIndex} />
      </StyledHero>
    </SliderIndexContext.Provider>
  );
};

export default Hero;

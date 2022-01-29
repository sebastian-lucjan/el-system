import { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderIndexContext from 'context/sliderIndexContext';
import HeroImage from 'components/HeroImage/HeroImage';
import { elSystemInfo } from 'data/appTextData';
import HeroInfo from 'components/HeroInfo/HeroInfo';
import StyledHero from './Hero.styles';

const Hero = () => {
  // console.log('API_KEY_DATOCMS_TOKEN');
  // console.log('API_KEY_DATOCMS_TOKEN', process.env.API_KEY_DATOCMS_TOKEN);

  const {
    offer: { offers: services },
  } = elSystemInfo;

  const servicesToSlider = services.filter((service) => service.hasSlide);

  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <SliderIndexContext.Provider value={{ slideIndex, setSlideIndex }}>
      <StyledHero>
        <HeroInfo servicesToSlider={servicesToSlider} />
        <HeroImage />
      </StyledHero>
    </SliderIndexContext.Provider>
  );
};

export default Hero;

import React, { useContext } from 'react';
import Wrapper from './HeroInfo.styles';
import HeroImageButton from '../HeroButton/HeroButton';
import HeroImageTitle from '../HeroImageTitle/HeroImageTitle';
import HeroImageDescription from '../HeroImageDescription/HeroImageDescription';
import { SliderIndexContext } from '../Hero/Hero';

const HeroInfo = ({ servicesToSlider }) => {
  const slideIndex = useContext(SliderIndexContext);

  const { headline, description, sliderImgName } = servicesToSlider[slideIndex];

  return (
    <Wrapper>
      <HeroImageTitle headline={headline} />
      <HeroImageDescription description={description} />
      <HeroImageButton />
    </Wrapper>
  );
};

export default HeroInfo;

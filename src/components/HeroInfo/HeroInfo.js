import React from 'react';
import Wrapper from './HeroInfo.styles';
import HeroText from '../HeroText/HeroText';
import HeroImageButton from '../HeroButton/HeroButton';

const HeroInfo = () => (
  <Wrapper>
    <HeroText />
    <HeroImageButton />
  </Wrapper>
);

export default HeroInfo;

import React, { useContext } from 'react';
import * as PropTypes from 'prop-types';
import Wrapper from './HeroInfo.styles';
import HeroImageButton from '../HeroButton/HeroButton';
import HeroImageTitle from '../HeroImageTitle/HeroImageTitle';
import HeroImageDescription from '../HeroImageDescription/HeroImageDescription';
import { SliderIndexContext } from '../Hero/Hero';

const isTitleToLong = (title) => title.length > 70;
const isDescriptionToLong = (description) => description.length > 200;

const HeroInfo = ({ servicesToSlider }) => {
  const slideIndex = useContext(SliderIndexContext);

  const { headline, headlineShort, description, descriptionShort } = servicesToSlider[slideIndex];

  return (
    <Wrapper>
      <HeroImageTitle
        smaller={isTitleToLong(headline)}
        headline={isTitleToLong(headline) ? headlineShort : headline}
      />
      <HeroImageDescription
        smaller={isDescriptionToLong(description)}
        description={isDescriptionToLong(description) ? descriptionShort : description}
      />
      <HeroImageButton />
    </Wrapper>
  );
};

HeroInfo.propTypes = {
  servicesToSlider: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HeroInfo;

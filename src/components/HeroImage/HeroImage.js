import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import StyledHeroImage from './HeroImage.styles';
import photoPhotovoltaic from '../../../public/images/photovoltaic-power.jpeg';
import photoFactory from '../../../public/images/factory.jpeg';
import photoInspection from '../../../public/images/inspection-person.jpeg';
import { SliderIndexContext } from '../Hero/Hero';

const HeroImage = ({ handleChangeSlideIndex }) => {
  const slideIndex = useContext(SliderIndexContext);

  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    beforeChange: (current, next) => handleChangeSlideIndex(next),
    customPaging: (i) => (
      <div
        style={{
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          transform: 'translateY(-20px)',
        }}
      />
    ),
    // nextArrow: ()
  };

  // useEffect(() => {
  // console.log(slideIndex);
  // }, [slideIndex]);

  return (
    <StyledHeroImage>
      <Slider {...settings}>
        <img src={photoPhotovoltaic} alt="fotowoltaika" />
        <img src={photoFactory} alt="factory" />
        <img src={photoInspection} alt="inspection" />
      </Slider>
    </StyledHeroImage>
  );
};

export default HeroImage;

// TODO: add alts to images

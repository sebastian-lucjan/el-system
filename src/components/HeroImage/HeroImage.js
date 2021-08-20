import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import StyledHeroImage from './HeroImage.styles';
import photoPhotovoltaic from '../../../public/images/photovoltaic-power.jpeg';
import photoFactory from '../../../public/images/factory.jpeg';
import photoInspection from '../../../public/images/inspection-person.jpeg';
import SliderArrow from '../SliderArrow/SliderArrow';

const StyledDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;

  cursor: pointer;

  //transform: translateY(-3vh);
`;
const DotsWrapper = ({ dots }) => (
  <StyledDotsWrapper>
    <ul
      style={{
        display: 'flex',
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        margin: '10px',
        // width: '100px',
        // position: 'absolute',
        // right: 'calc(25vw + 20px)',
        transform: 'translateX(-50%)',
        listStyle: 'none',
      }}
    >
      {dots}
    </ul>
  </StyledDotsWrapper>
);
const StyledDotsWrapper = styled.div`
  position: relative;
  & li {
    background-color: white;
    opacity: 0.5;
    margin: 10px;
    border-radius: 50%;
    width: 8px;
    height: 8px;
  }

  .slick-active {
    border-radius: 50%;
    width: 8px;
    height: 8px;
    background-color: white;
    opacity: 1;
    margin: 10px;
  }
`;

const HeroImage = ({ handleChangeSlideIndex }) => {
  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    beforeChange: (current, next) => handleChangeSlideIndex(next),
    appendDots: (dots) => <DotsWrapper dots={dots} />,
    customPaging: (i) => <StyledDot />,
    nextArrow: <SliderArrow direction="right" />,
    prevArrow: <SliderArrow direction="left" />,
  };

  // useEffect(() => {
  // console.log(slideIndex);
  // }, [slideIndex]);

  return (
    <StyledHeroImage>
      <Slider {...settings}>
        <img
          className="hero-image__image"
          src={photoPhotovoltaic}
          alt="fotowoltaika"
        />
        <img className="hero-image__image" src={photoFactory} alt="factory" />
        <img
          className="hero-image__image"
          src={photoInspection}
          alt="inspection"
        />
      </Slider>
    </StyledHeroImage>
  );
};

export default HeroImage;

// TODO: add alts to images

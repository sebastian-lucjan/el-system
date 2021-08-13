import React, { useContext, useEffect } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import StyledHeroImage from './HeroImage.styles';
import photoPhotovoltaic from '../../../public/images/photovoltaic-power.jpeg';
import photoFactory from '../../../public/images/factory.jpeg';
import photoInspection from '../../../public/images/inspection-person.jpeg';

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
        margin: '10px',
        // width: '100px',
        // position: 'absolute',
        // right: 'calc(25vw + 20px)',
        transform: 'translate( calc(50% - 40px) , -4vh)',
        listStyle: 'none',
      }}
    >
      {dots}
    </ul>
  </StyledDotsWrapper>
);
const StyledDotsWrapper = styled.div`
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

const SliderArrow = (props) => {
  const { className, style, onClick, direction, next } = props;
  return (
    <Icon
      style={{
        ...style,
        position: 'absolute',
        top: '50%',
        left: `${next ? 'calc(50vw - 50px)' : '0'}`,
        transform: 'translateY(-50%)',
        zIndex: '2',
        height: '30px',
        width: '30px',
        opacity: '.33',
        cursor: 'pointer',
      }}
      onClick={onClick}
      icon={`ph:caret-${direction}-bold`}
    />
  );
};

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
    nextArrow: <SliderArrow next direction="right" />,
    prevArrow: <SliderArrow prev direction="left" />,
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

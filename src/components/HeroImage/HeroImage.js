import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import StyledHeroImage from './HeroImage.styles';
import photoPhotovoltaicM from '../../../public/images/photovoltaic-power-960-639.jpeg';
import photoPhotovoltaicL from '../../../public/images/photovoltaic-power-1200-799.jpeg';
import photoPhotovoltaicXL from '../../../public/images/photovoltaic-power-1920-1080.jpeg';
import photoFactoryM from '../../../public/images/factory-960-640.jpeg';
import photoFactoryL from '../../../public/images/factory-1200-800.jpeg';
import photoFactoryXL from '../../../public/images/factory-1920-1280.jpeg';
import photoInspectionM from '../../../public/images/inspection-person-960-640.jpeg';
import photoInspectionL from '../../../public/images/inspection-person-1200-800.jpeg';
import photoInspectionXL from '../../../public/images/inspection-person-1920-1280.jpeg';
import SliderArrow from '../SliderArrow/SliderArrow';

const StyledDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  cursor: pointer;
`;
const DotsWrapper = ({ dots }) => (
  <StyledDotsWrapper>
    <ul
      style={{
        display: 'flex',
        position: 'absolute',
        bottom: '10px',
        left: '50%',
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
          srcSet={`
          ${photoPhotovoltaicM} 960w,
          ${photoPhotovoltaicL} 1200w,
          ${photoPhotovoltaicXL} 1920w,
          `}
          sizes="
          (max-width: 1920px) 960px,
          (max-width: 2400px) 1200px,
          1920px,
          "
          src={photoPhotovoltaicXL}
          alt="instalacje fotowoltaiczne"
        />
        <img
          className="hero-image__image"
          srcSet={`
          ${photoFactoryM} 960w,
          ${photoFactoryL} 1200w,
          ${photoFactoryXL} 1920w,
          `}
          sizes="
          (max-width: 1920px) 960px,
          (max-width: 2400px) 1200px,
          1920px,
          "
          src={photoFactoryXL}
          alt="rozwiązania dla przemysłu"
        />
        <img
          className="hero-image__image"
          srcSet={`
          ${photoInspectionM} 960w,
          ${photoInspectionL} 1200w,
          ${photoInspectionXL} 1920w,
          `}
          sizes="
          (max-width: 1920px) 960px,
          (max-width: 2400px) 1200px,
          1920px,
          "
          src={photoInspectionXL}
          alt="doradztwo techniczne nadzory inwestoreskie"
        />
      </Slider>
    </StyledHeroImage>
  );
};

export default HeroImage;

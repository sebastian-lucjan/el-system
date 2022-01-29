import Slider from 'react-slick';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import photoHouseAutomation from 'public/images/house-automation-1200.jpeg';
import photoPhotovoltaic from 'public/images/photovoltaic-power-1200.jpeg';
import photoInstallationProjecting from 'public/images/network-installation-projecting-1200.jpg';
import photoFactory from 'public/images/factory-1200.jpeg';
import photoInspection from 'public/images/inspection-person-1200.jpeg';
import photoTechnicalControl from 'public/images/technical-control-1200.jpg';
import SliderArrow from 'components/SliderArrow/SliderArrow';
import Image from 'next/image';
import { useContext } from 'react';
import SliderIndexContext from 'context/sliderIndexContext';
import StyledHeroImage from './HeroImage.styles';
import ImagesDataContext from '../../context/imagesDataContext';

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
      }}>
      {dots}
    </ul>
  </StyledDotsWrapper>
);

DotsWrapper.propTypes = {
  dots: PropTypes.arrayOf(PropTypes.object).isRequired,
};

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

const getSettings = (setSlideIndex = () => {}) => {
  return {
    dots: true,
    infinite: true,
    lazyLoad: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    className: 'slider__wrapper',
    beforeChange: (current, next) => setSlideIndex(next),
    appendDots: (dots) => <DotsWrapper dots={dots} />,
    customPaging: () => <StyledDot />,
    nextArrow: <SliderArrow direction="right" />,
    prevArrow: <SliderArrow direction="left" />,
  };
};

const HeroImage = () => {
  const { setSlideIndex } = useContext(SliderIndexContext);
  const { allSlides } = useContext(ImagesDataContext);

  const slides = allSlides.map(({ image, altDescription }) => {
    return (
      <div className="hero-image__image">
        <Image
          layout="fill"
          src={image.url}
          objectFit="cover"
          objectPosition="center bottom"
          quality={75}
          alt={altDescription}
          sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh"
          priority
        />
      </div>
    );
  });

  return (
    <StyledHeroImage>
      <Slider {...getSettings(setSlideIndex)}>
        {slides}
        {/* <div className="hero-image__image"> */}
        {/*  <Image */}
        {/*    layout="fill" */}
        {/*    src={photoInstallationProjecting} */}
        {/*    objectFit="cover" */}
        {/*    objectPosition="center bottom" */}
        {/*    quality={75} */}
        {/*    alt="projektowanie sieci, instalacji i urządzeń elektroenergetycznych" */}
        {/*    sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh" */}
        {/*    priority */}
        {/*  /> */}
        {/* </div> */}
        {/* <div className="hero-image__image"> */}
        {/*  <Image */}
        {/*    layout="fill" */}
        {/*    src={photoHouseAutomation} */}
        {/*    objectFit="cover" */}
        {/*    objectPosition="center bottom" */}
        {/*    quality={75} */}
        {/*    alt="automatyka domowa, smart dom" */}
        {/*    sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh" */}
        {/*  /> */}
        {/* </div> */}
        {/* <div className="hero-image__image"> */}
        {/*  <Image */}
        {/*    layout="fill" */}
        {/*    src={photoPhotovoltaic} */}
        {/*    objectFit="cover" */}
        {/*    objectPosition="center bottom" */}
        {/*    quality={75} */}
        {/*    alt="instalacje fotowoltaiczne, fotowoltaika" */}
        {/*    sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh" */}
        {/*  /> */}
        {/* </div> */}
        {/* <div className="hero-image__image"> */}
        {/*  <Image */}
        {/*    layout="fill" */}
        {/*    src={photoTechnicalControl} */}
        {/*    objectFit="cover" */}
        {/*    objectPosition="center bottom" */}
        {/*    quality={75} */}
        {/*    alt="kontrola stanu technicznego instalacji i urządzeń elektroenergetycznych" */}
        {/*    sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh" */}
        {/*  /> */}
        {/* </div> */}
        {/* <div className="hero-image__image"> */}
        {/*  <Image */}
        {/*    layout="fill" */}
        {/*    src={photoFactory} */}
        {/*    objectFit="cover" */}
        {/*    objectPosition="center bottom" */}
        {/*    quality={75} */}
        {/*    alt="rozwiązania dla przemysłu" */}
        {/*    sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh" */}
        {/*  /> */}
        {/* </div> */}
        {/* <div className="hero-image__image"> */}
        {/*  <Image */}
        {/*    layout="fill" */}
        {/*    src={photoInspection} */}
        {/*    objectFit="cover" */}
        {/*    objectPosition="center bottom" */}
        {/*    quality={75} */}
        {/*    alt="doradztwo techniczne nadzory inwestorskie" */}
        {/*    sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh" */}
        {/*  /> */}
        {/* </div> */}
      </Slider>
    </StyledHeroImage>
  );
};

export default HeroImage;

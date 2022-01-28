import Slider from 'react-slick';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import photoHouseAutomationL from 'public/images/house-automation-1200.jpeg';
import photoPhotovoltaicL from 'public/images/photovoltaic-power-1200.jpeg';
import photoInstallationProjectingL from 'public/images/network-installation-projecting-1200.jpg';
import photoFactoryL from 'public/images/factory-1200.jpeg';
import photoInspectionL from 'public/images/inspection-person-1200.jpeg';
import photoTechnicalControlL from 'public/images/technical-control-1200.jpg';
import SliderArrow from 'components/SliderArrow/SliderArrow';
import Image from 'next/image';
import StyledHeroImage from './HeroImage.styles';

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
    autoplaySpeed: 5000,
    pauseOnHover: true,
    className: 'slider__wrapper',
    beforeChange: (current, next) => handleChangeSlideIndex(next),
    appendDots: (dots) => <DotsWrapper dots={dots} />,
    customPaging: () => <StyledDot />,
    nextArrow: <SliderArrow direction="right" />,
    prevArrow: <SliderArrow direction="left" />,
  };

  return (
    <StyledHeroImage>
      <Slider {...settings}>
        <div className="hero-image__image">
          <Image
            layout="fill"
            src={photoInstallationProjectingL}
            objectFit="cover"
            objectPosition="center bottom"
            quality={75}
            alt="projektowanie sieci, instalacji i urządzeń elektroenergetycznych"
            sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh"
            priority
          />
        </div>
        <div className="hero-image__image">
          <Image
            layout="fill"
            src={photoHouseAutomationL}
            objectFit="cover"
            objectPosition="center bottom"
            quality={75}
            alt="automatyka domowa, smart dom"
            sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh"
            priority
          />
        </div>
        <div className="hero-image__image">
          <Image
            layout="fill"
            src={photoPhotovoltaicL}
            objectFit="cover"
            objectPosition="center bottom"
            quality={75}
            alt="instalacje fotowoltaiczne, fotowoltaika"
            sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh"
            priority
          />
        </div>
        <div className="hero-image__image">
          <Image
            layout="fill"
            src={photoTechnicalControlL}
            objectFit="cover"
            objectPosition="center bottom"
            quality={75}
            alt="kontrola stanu technicznego instalacji i urządzeń elektroenergetycznych"
            sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh"
            priority
          />
        </div>
        <div className="hero-image__image">
          <Image
            layout="fill"
            src={photoFactoryL}
            objectFit="cover"
            objectPosition="center bottom"
            quality={75}
            alt="rozwiązania dla przemysłu"
            sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh"
            priority
          />
        </div>
        <div className="hero-image__image">
          <Image
            layout="fill"
            src={photoInspectionL}
            objectFit="cover"
            objectPosition="center bottom"
            quality={75}
            alt="doradztwo techniczne nadzory inwestorskie"
            sizes="(min-width: 1200px) 50vw, (min-width: 768px) 100vh"
            priority
          />
        </div>
      </Slider>
    </StyledHeroImage>
  );
};

HeroImage.propTypes = { handleChangeSlideIndex: PropTypes.func.isRequired };

export default HeroImage;

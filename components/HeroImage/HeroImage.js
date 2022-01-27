import Slider from 'react-slick';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import photoHouseAutomationM from 'public/images/house-automation-960.jpeg';
import photoHouseAutomationL from 'public/images/house-automation-1200.jpeg';
import photoHouseAutomationXL from 'public/images/house-automation-1700.jpeg';
import photoPhotovoltaicM from 'public/images/photovoltaic-power-960.jpeg';
import photoPhotovoltaicL from 'public/images/photovoltaic-power-1200.jpeg';
import photoPhotovoltaicXL from 'public/images/photovoltaic-power-1920.jpeg';
import photoInstallationProjectingM from 'public/images/network-installation-projecting-960.jpg';
import photoInstallationProjectingL from 'public/images/network-installation-projecting-1200.jpg';
import photoInstallationProjectingXL from 'public/images/network-installation-projecting-1700.jpg';
import photoFactoryM from 'public/images/factory-960.jpeg';
import photoFactoryL from 'public/images/factory-1200.jpeg';
import photoFactoryXL from 'public/images/factory-1920.jpeg';
import photoInspectionM from 'public/images/inspection-person-960.jpeg';
import photoInspectionL from 'public/images/inspection-person-1200.jpeg';
import photoInspectionXL from 'public/images/inspection-person-1920.jpeg';
import photoTechnicalControlM from 'public/images/technical-control-960.jpg';
import photoTechnicalControlL from 'public/images/technical-control-1200.jpg';
import photoTechnicalControlXL from 'public/images/technical-control-1700.jpg';
import SliderArrow from 'components/SliderArrow/SliderArrow';
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
        <img
          className="hero-image__image"
          srcSet={`
          ${photoInstallationProjectingM} 960w,
          ${photoInstallationProjectingL} 1200w,
          ${photoInstallationProjectingXL} 1700w,
          `}
          sizes="
          (max-width: 1920px) 960px,
          (max-width: 2400px) 1200px,
          1700px,
          "
          src={photoInstallationProjectingXL}
          loading="lazy"
          alt="projektowanie sieci, instalacji i urządzeń elektroenergetycznych"
        />
        <img
          className="hero-image__image"
          srcSet={`
          ${photoHouseAutomationM} 960w,
          ${photoHouseAutomationL} 1200w,
          ${photoHouseAutomationXL} 1700w,
          `}
          sizes="
          (max-width: 1920px) 960px,
          (max-width: 2400px) 1200px,
          1700px,
          "
          src={photoHouseAutomationXL}
          loading="preload"
          alt="automatyka domowa, smart dom"
        />
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
          rel="lazy"
          alt="instalacje fotowoltaiczne, fotowoltaika"
        />
        <img
          className="hero-image__image"
          srcSet={`
          ${photoTechnicalControlM} 960w,
          ${photoTechnicalControlL} 1200w,
          ${photoTechnicalControlXL} 1700w,
          `}
          sizes="
          (max-width: 1920px) 960px,
          (max-width: 2400px) 1200px,
          1700px,
          "
          src={photoTechnicalControlXL}
          loading="lazy"
          alt="kontrola stanu technicznego instalacji i urządzeń elektroenergetycznych"
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
          loading="lazy"
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
          loading="lazy"
          alt="doradztwo techniczne nadzory inwestorskie"
        />
      </Slider>
    </StyledHeroImage>
  );
};

HeroImage.propTypes = { handleChangeSlideIndex: PropTypes.func.isRequired };

export default HeroImage;

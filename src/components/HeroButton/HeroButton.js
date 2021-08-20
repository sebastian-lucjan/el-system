import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StyledHeroImageButton from './HeroButton.styles';
import { websiteData } from '../../data/appTextData';
import ShortContact from '../ShortContact/ShortContact';
import { size } from '../../assets/styles/theme';

const maxResolutionFullSlider = `max-width: ${size.xxl}px`;

const StyledButtonContainer = styled.div`
  position: relative;
  width: 700px;
  height: 60px;
  z-index: 2;
  overflow: hidden;

  // @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
  // }

  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    display: none;
  }
`;

const HeroImageButton = () => {
  const [isClicked, setIsClicked] = useState(false); // start from "false"

  const {
    buttons: { sliderBtn: buttonText },
  } = websiteData;

  const handleOnClick = () => {
    setIsClicked(!isClicked);
  };
  const handleOnClose = () => {
    setIsClicked(false);
  };

  // useEffect(() => {
  //   console.log(isClicked);
  // }, [isClicked]);

  return (
    <StyledButtonContainer>
      <StyledHeroImageButton isClicked={isClicked} onClick={handleOnClick}>
        {buttonText}
      </StyledHeroImageButton>
      <ShortContact isClicked={isClicked} onClick={handleOnClose} />
    </StyledButtonContainer>
  );
};

export default HeroImageButton;

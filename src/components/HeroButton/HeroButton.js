import React, { useState } from 'react';
import styled from 'styled-components';
import StyledHeroImageButton from './HeroButton.styles';
import { websiteData } from '../../data/appTextData';
import ShortContact from '../ShortContact/ShortContact';
import { size, maxResolutionFullSlider } from '../../assets/styles/theme';

const StyledButtonContainer = styled.div`
  position: relative;
  width: 700px;
  height: 60px;
  z-index: 2;
  overflow: hidden;

  //iPad landscape and portrait
  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}),
    (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    display: none;
  }
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    display: block;
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

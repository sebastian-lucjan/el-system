import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import StyledHeroImageButton from './HeroButton.styles';
import { websiteData } from '../../data/appTextData';
import ShortContact from '../ShortContact/ShortContact';

const StyledButtonContainer = styled.div`
  position: relative;
  width: 700px;
  height: 60px;
  //bottom: 130px;
  //left: 130px;
  z-index: 2;
  overflow: hidden;
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

import React from 'react';
import * as PropTypes from 'prop-types';
import Hero from '../../Hero/Hero';
import { StyledStartPage } from './StartPage.styles';
import bulbImg from '../../../../public/images/bulb-mobile.jpeg';

const StartPage = ({ name, visibleSlider }) => (
  <StyledStartPage name={name}>
    {visibleSlider ? (
      <Hero />
    ) : (
      <img className="start-page__image" src={bulbImg} alt="żarówka" />
    )}
  </StyledStartPage>
);

StartPage.propTypes = {
  name: PropTypes.string.isRequired,
  visibleSlider: PropTypes.bool.isRequired,
};

export default StartPage;

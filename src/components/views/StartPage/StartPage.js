import React from 'react';
import * as PropTypes from 'prop-types';
import Hero from '../../Hero/Hero';
import { StyledStartPage } from './StartPage.styles';
import Navigation from '../../Navigation/Navigation';

const StartPage = ({ name, visibleSlider }) => (
  <StyledStartPage name={name}>
    {visibleSlider ? <Hero /> : <Navigation visibleHamburger={false} mobile />}
  </StyledStartPage>
);

StartPage.propTypes = {
  name: PropTypes.string.isRequired,
  visibleSlider: PropTypes.bool.isRequired,
};

export default StartPage;

import React from 'react';
import * as PropTypes from 'prop-types';
import Hero from '../../Hero/Hero';
import { StyledStartPage } from './StartPage.styles';
import Navigation from '../../Navigation/Navigation';

const StartPage = ({
  name,
  visibleSlider,
  activeMobileNavigation,
  handleChangeActiveMobileNav,
}) => {
  const mobileStartPage = activeMobileNavigation ? (
    <Navigation
      visibleHamburger={false}
      activeMobileNavigation={activeMobileNavigation}
      handleChangeActiveMobileNav={handleChangeActiveMobileNav}
    />
  ) : (
    <div>Bulb</div>
  );

  return (
    <StyledStartPage name={name}>
      {visibleSlider ? <Hero /> : mobileStartPage}
    </StyledStartPage>
  );
};

StartPage.propTypes = {
  name: PropTypes.string.isRequired,
  visibleSlider: PropTypes.bool.isRequired,
};

export default StartPage;

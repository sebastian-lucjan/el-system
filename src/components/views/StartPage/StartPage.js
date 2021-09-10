import React, { lazy, Suspense } from 'react';
import * as PropTypes from 'prop-types';
import bulbImg from '../../../../public/images/bulb-mobile-381-623.jpeg';
import { StyledStartPage } from './StartPage.styles';

const Hero = lazy(() => import('../../Hero/Hero'));

const StartPage = ({ name, visibleSlider }) => (
  <StyledStartPage name={name}>
    <Suspense fallback={<div>loading</div>}>
      {visibleSlider ? (
        <Hero />
      ) : (
        <img className="image start-page__image" src={bulbImg} alt="żarówka" />
      )}
    </Suspense>
  </StyledStartPage>
);

StartPage.propTypes = {
  name: PropTypes.string.isRequired,
  visibleSlider: PropTypes.bool.isRequired,
};

export default StartPage;

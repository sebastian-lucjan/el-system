import React, { lazy, Suspense, useContext } from 'react';
import bulbImgL from '../../../public/images/bulb-mobile-240-392.jpeg';
import bulbImgXL from '../../../public/images/bulb-mobile-381-623.jpeg';
import { StyledStartPage } from './StartPage.styles';
import { PageContext } from '../../providers/MainTemplate';
import Loader from '../../components/Loader/Loader';

const Hero = lazy(() => import('../../components/Hero/Hero'));

const StartPage = () => {
  const { visibleSlider } = useContext(PageContext);

  return (
    <StyledStartPage name="home">
      <Suspense fallback={<Loader />}>
        {visibleSlider ? (
          <Hero />
        ) : (
          <img
            className="image start-page__image"
            srcSet={`
          ${bulbImgL} 240w,
          ${bulbImgXL} 381w,
          `}
            sizes="
          (max-width: 400px) 240px,
          480px,
          "
            src={bulbImgXL}
            loading="preload"
            alt="żarówka"
          />
        )}
      </Suspense>
    </StyledStartPage>
  );
};

export default StartPage;

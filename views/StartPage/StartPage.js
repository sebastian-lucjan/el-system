import { useContext } from 'react';
import PageContext from 'data/pageContextData';
import Hero from 'components/Hero/Hero';
import bulbImgL from '../../public/images/bulb-mobile-240-392.jpeg';
import bulbImgXL from '../../public/images/bulb-mobile-381-623.jpeg';
import StyledStartPage from './StartPage.styles';

const StartPage = () => {
  const { visibleSlider } = useContext(PageContext);
  // const visibleSlider = true;

  console.log('visibleSlider: ', visibleSlider);

  return (
    <StyledStartPage name="home">
      {visibleSlider ? (
        <Hero />
      ) : (
        <div>
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
        </div>
      )}
    </StyledStartPage>
  );
};

export default StartPage;

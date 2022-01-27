import { useContext } from 'react';
import PageContext from 'data/pageContextData';
import Hero from 'components/Hero/Hero';
import Image from 'next/image';
import bulbImgXL from 'public/images/bulb-mobile-381-623.jpeg';
import StyledStartPage from './StartPage.styles';

const StartPage = () => {
  const { visibleSlider } = useContext(PageContext);

  return (
    <StyledStartPage name="home">
      {visibleSlider ? (
        <Hero />
      ) : (
        <div className="image start-page__image">
          <Image width={381} height={623} layout="responsive" src={bulbImgXL} quality={75} alt="żarówka" priority />
        </div>
      )}
    </StyledStartPage>
  );
};

export default StartPage;

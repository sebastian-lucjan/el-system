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
          <Image
            layout="responsive"
            src={bulbImgXL}
            quality={75}
            alt="żarówka"
            sizes="(min-width: 0px) 25vw" // 25vh because retina retina 2x property
            priority
          />
        </div>
      )}
    </StyledStartPage>
  );
};

export default StartPage;

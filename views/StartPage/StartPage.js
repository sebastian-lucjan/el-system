import { useContext } from 'react';
import PageContext from 'data/pageContextData';
import Image from 'next/image';
import bulbImg from 'public/images/bulb-mobile-381-623.jpeg';
import dynamic from 'next/dynamic';
import StyledStartPage from './StartPage.styles';

const Hero = dynamic(() => import('components/Hero/Hero'));

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
            width={381}
            height={623}
            src={bulbImg}
            quality={65}
            alt="żarówka"
            sizes="(min-width: 0px) 50vw" // 40vh because retina retina 2x property
            priority
          />
        </div>
      )}
    </StyledStartPage>
  );
};

export default StartPage;

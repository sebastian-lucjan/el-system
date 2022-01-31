import { useContext, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderContext from 'context/sliderIndexContext';
import HeroImage from 'components/HeroImage/HeroImage';
import HeroInfo from 'components/HeroInfo/HeroInfo';
import useSWR from 'swr';
import ImagesDataContext from 'context/imagesDataContext';
import axios from 'axios';
import StyledHero from './Hero.styles';

const dataFetcher = (url) => axios.get(url).then((res) => res.data);

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const slidesData = useContext(ImagesDataContext);

  const { data: slidesDataCurrent } = useSWR('/api/slides', dataFetcher, { initialData: slidesData });

  const sliderDataUpdated = typeof slidesDataCurrent !== 'undefined' ? slidesDataCurrent : slidesData;

  return (
    <SliderContext.Provider value={{ slideIndex, setSlideIndex, sliderDataUpdated }}>
      <StyledHero>
        <HeroInfo />
        <HeroImage />
      </StyledHero>
    </SliderContext.Provider>
  );
};

export default Hero;

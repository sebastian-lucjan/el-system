import { useContext } from 'react';
import SliderContext from 'context/sliderIndexContext';
import addNonBreakableSpaces from 'helpers/addNonBreakableSpaces';
import HeroImageButton from 'components/HeroButton/HeroButton';
import HeroImageTitle from 'components/HeroImageTitle/HeroImageTitle';
import HeroImageDescription from 'components/HeroImageDescription/HeroImageDescription';
import Wrapper from './HeroInfo.styles';

const isTitleToLong = (title) => title.length > 70;
const isDescriptionToLong = (description) => description.length > 200;

const HeroInfo = () => {
  const { slideIndex, sliderDataUpdated: slidesData } = useContext(SliderContext);

  const { title, description: rawDescription } = slidesData[slideIndex];

  const description = addNonBreakableSpaces(rawDescription);

  return (
    <Wrapper>
      <HeroImageTitle smaller={isTitleToLong(title)} headline={title} />
      <HeroImageDescription smaller={isDescriptionToLong(description)} description={description} />
      <HeroImageButton />
    </Wrapper>
  );
};

export default HeroInfo;

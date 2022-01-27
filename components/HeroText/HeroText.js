import HeroImageTitle from 'HeroImageTitle/HeroImageTitle';
import HeroImageDescription from 'HeroImageDescription/HeroImageDescription';
import StyledHeroText from './HeroText.styles';

const HeroText = () => (
  <StyledHeroText>
    <HeroImageTitle />
    <HeroImageDescription />
  </StyledHeroText>
);

export default HeroText;

import * as PropTypes from 'prop-types';
import StyledHeroImageTitle from './HeroImageTitle.styles';

const HeroImageTitle = ({ headline, smaller }) => (
  <StyledHeroImageTitle smaller={smaller}>{headline.toUpperCase()}</StyledHeroImageTitle>
);

HeroImageTitle.propTypes = { headline: PropTypes.string.isRequired };

export default HeroImageTitle;

import * as PropTypes from 'prop-types';
import addNonBreakableSpaces from 'helpers/addNonBreakableSpaces';
import StyledHeroImageDescription from './HeroImageDescription.styles';

const HeroImageDescription = ({ description: rawDescription, smaller }) => {
  const description = addNonBreakableSpaces(rawDescription);

  return <StyledHeroImageDescription smaller={smaller}>{description}</StyledHeroImageDescription>;
};

HeroImageDescription.defaultProps = { description: '', smaller: false };

HeroImageDescription.propTypes = { description: PropTypes.string, smaller: PropTypes.bool };

export default HeroImageDescription;

import * as PropTypes from 'prop-types';
import StyledHeroImageDescription from './HeroImageDescription.styles';
import addNonBreakableSpaces from '../../helpers/addNonBreakableSpaces';

const HeroImageDescription = ({ description: rawDescription, smaller }) => {
  const description = addNonBreakableSpaces(rawDescription);

  return <StyledHeroImageDescription smaller={smaller}>{description}</StyledHeroImageDescription>;
};

HeroImageDescription.defaultProps = { description: '', smaller: false };

HeroImageDescription.propTypes = { description: PropTypes.string, smaller: PropTypes.bool };

export default HeroImageDescription;

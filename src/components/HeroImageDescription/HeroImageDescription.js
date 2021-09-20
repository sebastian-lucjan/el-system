import React from 'react';
import * as PropTypes from 'prop-types';
import StyledHeroImageDescription from './HeroImageDescription.styles';

const HeroImageDescription = ({ description, smaller }) => (
  <StyledHeroImageDescription smaller={smaller}>{description}</StyledHeroImageDescription>
);

HeroImageDescription.defaultProps = { description: '', smaller: false };

HeroImageDescription.propTypes = { description: PropTypes.string, smaller: PropTypes.bool };

export default HeroImageDescription;

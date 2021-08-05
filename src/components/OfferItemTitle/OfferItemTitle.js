import React from 'react';
import * as PropTypes from 'prop-types';
import StyledOfferItemTitle from './OfferItemTitle.styles';

const OfferItemTitle = ({ title }) => (
  <StyledOfferItemTitle>{title}</StyledOfferItemTitle>
);

export default OfferItemTitle;

OfferItemTitle.propTypes = { title: PropTypes.string.isRequired };

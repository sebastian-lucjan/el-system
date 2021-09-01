import React from 'react';
import * as PropTypes from 'prop-types';
import StyledOfferItemTitle from './OfferItemTitle.styles';

const OfferItemTitle = ({ title, activeOfferDescription, onClick }) => (
  <StyledOfferItemTitle onClick={onClick} activeOfferDescription={activeOfferDescription}>
    {title}
  </StyledOfferItemTitle>
);

OfferItemTitle.defaultProps = {
  activeOfferDescription: false,
  onClick: () => {},
};

OfferItemTitle.propTypes = {
  title: PropTypes.string.isRequired,
  activeOfferDescription: PropTypes.bool,
  onClick: PropTypes.func,
};

export default OfferItemTitle;

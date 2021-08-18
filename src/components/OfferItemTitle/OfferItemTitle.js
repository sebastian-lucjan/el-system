import React from 'react';
import * as PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import StyledOfferItemTitle from './OfferItemTitle.styles';

const OfferItemTitle = ({ title, activeOfferDescription, onClick }) => (
  <StyledOfferItemTitle
    onClick={onClick}
    activeOfferDescription={activeOfferDescription}
  >
    {title}
  </StyledOfferItemTitle>
);

export default OfferItemTitle;

OfferItemTitle.propTypes = { title: PropTypes.string.isRequired };

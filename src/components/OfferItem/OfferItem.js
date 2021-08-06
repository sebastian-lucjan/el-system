import React from 'react';
import * as PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { StyledOfferItem } from './OfferItem.styles';
import OfferItemTitle from '../OfferItemTitle/OfferItemTitle';
import OfferItemDescription from '../OfferItemDescription/OfferItemDescription';

const OfferItem = ({ title, iconName, description, othersArray }) => (
  <StyledOfferItem>
    <div className="offerItem__headline">
      <Icon className="offerItem__icon" icon={iconName} />
      <OfferItemTitle title={title} />
    </div>
    <OfferItemDescription description={description} othersArray={othersArray} />
  </StyledOfferItem>
);

OfferItem.defaultProps = {
  othersArray: [],
};

OfferItem.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  othersArray: PropTypes.instanceOf(Array),
};

export default OfferItem;

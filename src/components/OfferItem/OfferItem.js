import React from 'react';
import * as PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const OfferItem = ({ iconName }) => <Icon icon={iconName} />;

export default OfferItem;

OfferItem.propTypes = {
  iconName: PropTypes.string.isRequired,
};

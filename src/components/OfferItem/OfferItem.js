import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { StyledOfferItem } from './OfferItem.styles';
import OfferItemTitle from '../OfferItemTitle/OfferItemTitle';
import OfferItemDescription from '../OfferItemDescription/OfferItemDescription';

const OfferItem = ({ title, iconName, description, othersArray, mobile }) => {
  const [activeOffer, setActiveOffer] = useState(false);
  const handleClickOfferItem = () => {
    setActiveOffer(!activeOffer);
  };

  return (
    <StyledOfferItem>
      <div className="offerItem__headline">
        {mobile ? (
          <Icon className="offerItem__icon" icon={iconName} />
        ) : (
          <Icon
            style={{
              width: '20px',
              height: '15px',
              marginRight: '10px',
              flexShrink: '0',
              color: '#777',
            }}
            icon="ph:caret-down-bold"
          />
        )}
        <OfferItemTitle title={title} />
      </div>
      {mobile && (
        <OfferItemDescription
          description={description}
          othersArray={othersArray}
        />
      )}
    </StyledOfferItem>
  );
};

OfferItem.defaultProps = {
  othersArray: [],
  mobile: false,
};

OfferItem.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  othersArray: PropTypes.instanceOf(Array),
  mobile: PropTypes.bool,
};

export default OfferItem;

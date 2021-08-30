import React, { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { StyledOfferItem } from './OfferItem.styles';
import OfferItemTitle from '../OfferItemTitle/OfferItemTitle';
import OfferItemDescription from '../OfferItemDescription/OfferItemDescription';

const OfferItem = ({ title, iconName, description, othersArray, activeDescription, mobile }) => {
  const [activeOfferDescription, setActiveOfferDescription] = useState(activeDescription);

  const handleClickOfferItem = () => {
    if (mobile) {
      setActiveOfferDescription(!activeOfferDescription);
    }
  };

  return (
    <StyledOfferItem>
      <div className="offerItem__headline">
        {mobile ? (
          <Icon
            style={{
              width: '20px',
              height: '15px',
              marginRight: '10px',
              flexShrink: '0',
              color: `${activeOfferDescription ? '#fff' : '#777'}`,
            }}
            icon={`ph:caret-${activeOfferDescription ? 'down' : 'up'}-bold`}
          />
        ) : (
          <Icon className="offerItem__icon" icon={iconName} />
        )}
        <OfferItemTitle
          activeOfferDescription={activeOfferDescription}
          title={title}
          onClick={handleClickOfferItem}
        />
      </div>
      {activeOfferDescription && (
        <OfferItemDescription description={description} othersArray={othersArray} />
      )}
    </StyledOfferItem>
  );
};

OfferItem.defaultProps = {
  othersArray: [],
  activeDescription: true,
  mobile: false,
};

OfferItem.propTypes = {
  title: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  othersArray: PropTypes.instanceOf(Array),
  activeDescription: PropTypes.bool,
  mobile: PropTypes.bool,
};

export default OfferItem;

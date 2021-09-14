import React from 'react';
import * as PropTypes from 'prop-types';
import StyledOfferItemDescription from './OfferItemDescription.styles';

const listOthers = (othersArray) => {
  const others = othersArray.map((item, index) => <li key={`other-offer-${index + 1}`}>{item}</li>);

  return <ul className="offerItem__othersList">{others}</ul>;
};

const OfferItemDescription = ({ description, othersArray }) => (
  <StyledOfferItemDescription>
    {description ? <p>{description}</p> : listOthers(othersArray)}
  </StyledOfferItemDescription>
);

OfferItemDescription.defaultProps = {
  othersArray: [],
};

OfferItemDescription.propTypes = {
  description: PropTypes.string.isRequired,
  othersArray: PropTypes.instanceOf(Array),
};

export default OfferItemDescription;

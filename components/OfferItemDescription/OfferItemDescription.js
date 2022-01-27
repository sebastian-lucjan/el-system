import * as PropTypes from 'prop-types';
import addNonBreakableSpaces from 'helpers/addNonBreakableSpaces';
import StyledOfferItemDescription from './OfferItemDescription.styles';

const listOthers = (othersArray) => {
  const others = othersArray.map((item, index) => <li key={`other-offer-${index + 1}`}>{item}</li>);

  return <ul className="offerItem__othersList">{others}</ul>;
};

const OfferItemDescription = ({ description, othersArray }) => {
  const offerContent = (description, othersArray) => {
    if (description) {
      const editedDescription = addNonBreakableSpaces(description);
      return <p>{editedDescription}</p>;
    }

    return listOthers(othersArray);
  };

  return <StyledOfferItemDescription>{offerContent(description, othersArray)}</StyledOfferItemDescription>;
};

OfferItemDescription.defaultProps = {
  othersArray: [],
};

OfferItemDescription.propTypes = {
  description: PropTypes.string.isRequired,
  othersArray: PropTypes.instanceOf(Array),
};

export default OfferItemDescription;

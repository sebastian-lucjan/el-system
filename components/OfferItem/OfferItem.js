import { useContext, useState } from 'react';
import * as PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { PageContext } from 'data/pageContextData';
import { StyledOfferItem } from './OfferItem.styles';
import OfferItemTitle from '../OfferItemTitle/OfferItemTitle';
import OfferItemDescription from '../OfferItemDescription/OfferItemDescription';

const OfferItem = ({ offer }) => {
  const { headline: title, iconName, description, others } = offer;
  const { mobile } = useContext(PageContext);
  const activeDescription = !mobile;

  const [activeOfferDescription, setActiveOfferDescription] = useState(activeDescription);

  const handleClickOfferItem = () => {
    if (mobile) {
      setActiveOfferDescription(!activeOfferDescription);
    }
  };

  return (
    <StyledOfferItem>
      <header className="offerItem__headline">
        {mobile ? (
          <Icon
            style={{
              width: '20px',
              height: '15px',
              marginRight: '10px',
              flexShrink: '0',
              color: `${activeOfferDescription ? '#fff' : '#777'}`,
            }}
            icon={`ph:caret-${activeOfferDescription ? 'down' : 'right'}-bold`}
            onClick={handleClickOfferItem}
          />
        ) : (
          <Icon className="offerItem__icon" icon={iconName} />
        )}
        <OfferItemTitle activeOfferDescription={activeOfferDescription} title={title} onClick={handleClickOfferItem} />
      </header>
      {activeOfferDescription && <OfferItemDescription description={description} othersArray={others} />}
    </StyledOfferItem>
  );
};

OfferItem.defaultProps = {
  offer: {},
};

OfferItem.propTypes = {
  offer: PropTypes.shape({
    headline: PropTypes.string,
    iconName: PropTypes.string,
    description: PropTypes.string,
    othersArray: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default OfferItem;

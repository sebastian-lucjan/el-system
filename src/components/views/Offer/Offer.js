import React from 'react';
import * as PropTypes from 'prop-types';
import { StyledOffer, Wrapper } from './Offer.styles';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';
import OfferItem from '../../OfferItem/OfferItem';

const OfferPage = ({ name }) => {
  const { offer: offersData } = elSystemInfo;
  const contentTitle = offersData.headline.toUpperCase();
  const offers = offersData.offers.map((offer, index) => {
    const key = `offer-nr-${index + 1}`;
    const { iconName, headline, description, others } = offer;
    return (
      <OfferItem
        key={key}
        title={headline}
        iconName={iconName}
        description={description}
        othersArray={others}
      />
    );
  });

  return (
    <StyledOffer name={name}>
      <Wrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        {offers}
      </Wrapper>
    </StyledOffer>
  );
};

OfferPage.propTypes = { name: PropTypes.string.isRequired };

export default OfferPage;

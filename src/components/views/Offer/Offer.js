import React from 'react';
import { StyledOffer, Wrapper } from './Offer.styles';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';
import OfferItem from '../../OfferItem/OfferItem';

const OfferPage = () => {
  const { offer } = elSystemInfo;
  const contentTitle = offer.headline.toUpperCase();
  const offers = offer.offers.map((offer, index) => {
    const key = `offer-nr-${index + 1}`;
    const { iconName } = offer;
    return <OfferItem key={key} iconName={iconName} />;
  });

  return (
    <StyledOffer>
      <Wrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        {offers}
      </Wrapper>
    </StyledOffer>
  );
};

export default OfferPage;

// TODO: icons to add

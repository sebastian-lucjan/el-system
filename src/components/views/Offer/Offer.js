import React from 'react';
import { StyledOffer, Wrapper } from './Offer.styles';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';
import OfferItem from '../../OfferItem/OfferItem';

const OfferPage = () => {
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

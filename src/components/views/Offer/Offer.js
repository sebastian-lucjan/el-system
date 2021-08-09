import React from 'react';
import * as PropTypes from 'prop-types';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';
import OfferItem from '../../OfferItem/OfferItem';
import { ContentWrapper } from '../../ContentWrapper/ContentWrapper.styles';
import { ViewWrapper } from '../../ViewWrapper/ViewWrapper.styles';

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
    <ViewWrapper name={name}>
      <ContentWrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        {offers}
      </ContentWrapper>
    </ViewWrapper>
  );
};

OfferPage.propTypes = { name: PropTypes.string.isRequired };

export default OfferPage;

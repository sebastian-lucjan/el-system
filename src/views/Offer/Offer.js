import Title from '../../components/Title/Title';
import ContentDivider from '../../components/ContentDivider/ContentDivider';
import { elSystemInfo } from '../../data/appTextData';
import OfferItem from '../../components/OfferItem/OfferItem';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper.styles';
import { ViewWrapper } from '../../components/ViewWrapper/ViewWrapper.styles';

const OfferPage = () => {
  const { offer: offersData } = elSystemInfo;
  const contentTitle = offersData.headline.toUpperCase();

  const offers = offersData.offers.map((offer, index) => {
    const key = `offer-nr-${index + 1}`;
    return <OfferItem key={key} offer={offer} />;
  });

  return (
    <ViewWrapper name="offer">
      <ContentWrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        {offers}
      </ContentWrapper>
    </ViewWrapper>
  );
};

export default OfferPage;

import Title from 'components/Title/Title';
import ContentDivider from 'components/ContentDivider/ContentDivider';
import { elSystemInfo } from 'data/appTextData';
import CompaniesList from 'components/CompaniesList/CompaniesList';
import ContentWrapper from 'components/ContentWrapper/ContentWrapper.styles';
import ViewWrapper from 'components/ViewWrapper/ViewWrapper.styles';

const Cooperation = () => {
  const { cooperation } = elSystemInfo;
  const contentTitle = cooperation.headline.toUpperCase();
  const companiesList = cooperation.companies;

  return (
    <ViewWrapper name="cooperation">
      <ContentWrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        <CompaniesList companiesList={companiesList} />
      </ContentWrapper>
    </ViewWrapper>
  );
};

export default Cooperation;

import { StyledParagraph } from './AboutPage.styles';
import Title from '../../components/Title/Title';
import ContentDivider from '../../components/ContentDivider/ContentDivider';
import { elSystemInfo } from '../../data/appTextData';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper.styles';
import { ViewWrapper } from '../../components/ViewWrapper/ViewWrapper.styles';
import addNonBreakableSpaces from '../../helpers/addNonBreakableSpaces';

const AboutPage = () => {
  const {
    companyInfo,
    companyInfo: { textParagraphs },
  } = elSystemInfo;
  const contentTitle = companyInfo.headline.toUpperCase();
  const paragraphs = textParagraphs.map((rawParagraph, index) => {
    const key = `paragraph-${index + 1}`;
    const paragraph = addNonBreakableSpaces(rawParagraph);

    return (
      <StyledParagraph className="paragraph" key={key}>
        {paragraph}
      </StyledParagraph>
    );
  });

  return (
    <ViewWrapper name="about">
      <ContentWrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        {paragraphs}
      </ContentWrapper>
    </ViewWrapper>
  );
};

export default AboutPage;

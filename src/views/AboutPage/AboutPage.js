import React from 'react';
import * as PropTypes from 'prop-types';
import { StyledParagraph } from './AboutPage.styles';
import Title from '../../components/Title/Title';
import ContentDivider from '../../components/ContentDivider/ContentDivider';
import { elSystemInfo } from '../../data/appTextData';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper.styles';
import { ViewWrapper } from '../../components/ViewWrapper/ViewWrapper.styles';

const AboutPage = ({ name }) => {
  const {
    companyInfo,
    companyInfo: { textParagraphs },
  } = elSystemInfo;
  const contentTitle = companyInfo.headline.toUpperCase();
  const paragraphs = textParagraphs.map((paragraph, index) => {
    const key = `paragraph-${index + 1}`;

    return (
      <StyledParagraph className="paragraph" key={key}>
        {paragraph}
      </StyledParagraph>
    );
  });

  return (
    <ViewWrapper name={name}>
      <ContentWrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        {paragraphs}
      </ContentWrapper>
    </ViewWrapper>
  );
};

AboutPage.propTypes = { name: PropTypes.string.isRequired };

export default AboutPage;
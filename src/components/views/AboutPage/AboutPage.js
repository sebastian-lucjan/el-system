import React from 'react';
import { StyledAbout, Wrapper } from './AboutPage.styles';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';

const AboutPage = () => {
  const {
    companyInfo,
    companyInfo: { textParagraphs },
  } = elSystemInfo;
  const contentTitle = companyInfo.headline.toUpperCase();
  const paragraphs = textParagraphs.map((paragraph, index) => {
    const key = `paragraph-${index + 1}`;

    return (
      <div className="paragraph" key={key}>
        {paragraph}
      </div>
    );
  });

  return (
    <StyledAbout>
      <Wrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        {paragraphs}
      </Wrapper>
    </StyledAbout>
  );
};

export default AboutPage;

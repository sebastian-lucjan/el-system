import React from 'react';
import * as PropTypes from 'prop-types';
import { StyledAbout, Wrapper } from './AboutPage.styles';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';
import Cooperation from '../Cooperation/Cooperation';

const AboutPage = ({ name }) => {
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
    <StyledAbout name={name}>
      <Wrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        {paragraphs}
      </Wrapper>
    </StyledAbout>
  );
};

AboutPage.propTypes = { name: PropTypes.string.isRequired };

export default AboutPage;

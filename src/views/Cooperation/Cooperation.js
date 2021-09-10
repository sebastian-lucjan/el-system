import React from 'react';
import * as PropTypes from 'prop-types';
import Title from '../../components/Title/Title';
import ContentDivider from '../../components/ContentDivider/ContentDivider';
import { elSystemInfo } from '../../data/appTextData';
import CompaniesList from '../../components/CompaniesList/CompaniesList';
import { ContentWrapper } from '../../components/ContentWrapper/ContentWrapper.styles';
import { ViewWrapper } from '../../components/ViewWrapper/ViewWrapper.styles';

const Cooperation = ({ name }) => {
  const { cooperation } = elSystemInfo;
  const contentTitle = cooperation.headline.toUpperCase();
  const companiesList = cooperation.companies;

  return (
    <ViewWrapper name={name}>
      <ContentWrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        <CompaniesList companiesList={companiesList} />
      </ContentWrapper>
    </ViewWrapper>
  );
};

Cooperation.propTypes = { name: PropTypes.string.isRequired };

export default Cooperation;

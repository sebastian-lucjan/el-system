import React from 'react';
import * as PropTypes from 'prop-types';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';
import CompaniesList from '../../CompaniesList/CompaniesList';
import { ContentWrapper } from '../../ContentWrapper/ContentWrapper.styles';
import { ViewWrapper } from '../../ViewWrapper/ViewWrapper.styles';

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

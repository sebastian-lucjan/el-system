import React from 'react';
import * as PropTypes from 'prop-types';
import { StyledCooperation, Wrapper } from './Cooperation.styles';
import Title from '../../Title/Title';
import ContentDivider from '../../ContentDivider/ContentDivider';
import { elSystemInfo } from '../../../data/appTextData';
import CompaniesList from '../../CompaniesList/CompaniesList';

const Cooperation = ({ name }) => {
  const { cooperation } = elSystemInfo;
  const contentTitle = cooperation.headline.toUpperCase();
  const companiesList = cooperation.companies;

  return (
    <StyledCooperation name={name}>
      <Wrapper>
        <Title title={contentTitle} />
        <ContentDivider />
        <CompaniesList companiesList={companiesList} />
      </Wrapper>
    </StyledCooperation>
  );
};

Cooperation.propTypes = { name: PropTypes.string.isRequired };

export default Cooperation;

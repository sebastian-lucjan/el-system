import React from 'react';
import * as PropTypes from 'prop-types';
import { StyledCompaniesList } from './CompaniesList.styles';

const CompaniesList = ({ companiesList }) => {
  const companies = companiesList.map((company, index) => {
    const key = `company-${index + 1}`;

    return (
      <li className="listItem" key={key}>
        {company}
      </li>
    );
  });

  return <StyledCompaniesList>{companies}</StyledCompaniesList>;
};

CompaniesList.propTypes = {
  companiesList: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CompaniesList;

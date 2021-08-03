import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Title.styles';

const Title = ({ title }) => <StyledTitle>{title}</StyledTitle>;

export default Title;

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ title, path = '' }) => (
  <StyledButton exact to={path}>
    {title}
    sda
  </StyledButton>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Button;

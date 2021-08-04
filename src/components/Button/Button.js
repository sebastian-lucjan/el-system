import PropTypes from 'prop-types';
import React from 'react';
import { StyledButton } from './Button.styles';

const Button = ({ title, path = 'test' }) => (
  <StyledButton exact to={path}>
    {title}
  </StyledButton>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export default Button;

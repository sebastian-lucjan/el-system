import React from 'react';
import PropTypes from 'prop-types';
import { websiteData } from '../../data/appTextData';
import StyledLogo from './Logo.styles';

const Logo = ({ mobile }) => (
  <StyledLogo to="home" spy smooth duration={mobile ? 0 : 800}>
    <h1>{websiteData.logo}</h1>
  </StyledLogo>
);

Logo.defaultProps = { mobile: false };

Logo.propTypes = { mobile: PropTypes.bool };

export default Logo;

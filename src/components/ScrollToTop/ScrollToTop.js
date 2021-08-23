import React from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import StyledIcon from './ScrollToTop.styles';

const ScrollToTop = ({ mobile }) => (
  <StyledIcon to="home" spy smooth duration={mobile ? 0 : 800}>
    <Icon className="scrollToTopIcon" icon="ph:caret-up-bold" />
  </StyledIcon>
);

ScrollToTop.defaultProps = { mobile: false };

ScrollToTop.propTypes = { mobile: PropTypes.bool };

export default ScrollToTop;

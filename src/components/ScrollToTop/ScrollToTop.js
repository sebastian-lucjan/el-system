import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
import StyledIcon from './ScrollToTop.styles';

const ScrollToTop = () => (
  <StyledIcon onClick={scroll.scrollToTop} to="home" spy smooth duration={800}>
    <Icon className="scrollToTopIcon" icon="ph:caret-up-bold" />
  </StyledIcon>
);

// ScrollToTop.propTypes = { onClick: PropTypes.func.isRequired };

export default ScrollToTop;

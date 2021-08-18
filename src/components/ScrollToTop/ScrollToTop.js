import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { animateScroll as scroll } from 'react-scroll';
import StyledIcon from './ScrollToTop.styles';

const ScrollToTop = ({ mobile }) => (
  <StyledIcon to="home" smooth duration={mobile ? 0 : 800}>
    <Icon className="scrollToTopIcon" icon="ph:caret-up-bold" />
  </StyledIcon>
);

export default ScrollToTop;

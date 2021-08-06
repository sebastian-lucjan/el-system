import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import StyledIcon from './ScrollToTop.styles';

const ScrollToTop = ({ onClick }) => (
  <StyledIcon>
    <Icon
      onClick={onClick}
      className="scrollToTopIcon"
      icon="ph:caret-up-bold"
    />
  </StyledIcon>
);

export default ScrollToTop;

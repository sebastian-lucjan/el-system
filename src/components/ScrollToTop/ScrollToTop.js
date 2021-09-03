import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import StyledIcon from './ScrollToTop.styles';
import { simulateClick } from '../../helpers/simulateClick';

const ScrollToTop = ({ mobile }) => {
  const goTopRef = useRef(null);

  return (
    <StyledIcon
      ref={goTopRef}
      onKeyDown={(e) => simulateClick(e, goTopRef, 'home')}
      tabIndex="0"
      to="home"
      spy
      smooth
      duration={mobile ? 0 : 800}
    >
      <Icon className="scrollToTopIcon" icon="ph:caret-up-bold" />
    </StyledIcon>
  );
};

ScrollToTop.defaultProps = { mobile: false };

ScrollToTop.propTypes = { mobile: PropTypes.bool };

export default ScrollToTop;

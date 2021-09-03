import React, { useRef } from 'react';
import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import StyledIcon from './ScrollToTop.styles';

const ScrollToTop = ({ mobile }) => {
  const testRef = useRef(null);

  const simulateClick = (e) => {
    if (e.keyCode === 13) {
      testRef.current.scrollTo('home');
    }
  };

  return (
    <StyledIcon
      ref={testRef}
      onKeyDown={(e) => simulateClick(e, 'home')}
      onClick={() => 'forced onClick'}
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

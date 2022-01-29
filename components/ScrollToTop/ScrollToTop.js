import { useContext, useRef } from 'react';
import { Icon } from '@iconify/react';
import PageContext from 'data/pageContextData';
import simulateClick from 'helpers/simulateClick';
import StyledIcon from './ScrollToTop.styles';

const ScrollToTop = () => {
  const goTopRef = useRef(null);
  const { mobile } = useContext(PageContext);

  return (
    <StyledIcon
      ref={goTopRef}
      onKeyDown={(e) => simulateClick(e, goTopRef, 'home')}
      tabIndex="0"
      to="home"
      spy
      smooth
      duration={mobile ? 0 : 800}>
      <Icon className="scrollToTopIcon" icon="ph:caret-up-bold" />
    </StyledIcon>
  );
};

export default ScrollToTop;

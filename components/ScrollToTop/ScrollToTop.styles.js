import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledIcon = styled(Link)`
  position: fixed;
  bottom: ${({ theme }) => theme.baseSpacing};
  right: 30px;
  color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.zIndex.superiorPriority};

  .scrollToTopIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export default StyledIcon;

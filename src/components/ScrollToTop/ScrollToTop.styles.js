import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledIcon = styled(Link)`
  position: fixed;
  bottom: 6px;
  right: ${({ theme }) => theme.baseSpacing};
  color: ${({ theme }) => theme.colors.white};

  .scrollToTopIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  @media (${({ theme }) => theme.devices.xxl}) {
    bottom: 15px;
  }
`;

export default StyledIcon;

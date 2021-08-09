import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const StyledIcon = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;

  .scrollToTopIcon {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export default StyledIcon;

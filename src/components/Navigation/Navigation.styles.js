import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 100%;
`;

const activeClass = 'active-link';

export const StyledNavLink = styled(Link).attrs({ activeClass })`
  font-size: 16px;
  font-weight: 300;
  margin: 20px;
  cursor: pointer;
  overflow: hidden;
  color: white;
  text-decoration: none;

  &::after {
    display: block;
    content: '';
    height: 2px;
    width: 100%;
    background-color: white;
    transform: translateX(-110%);
    transition: 0.3s;
  }
  &:hover {
    &::after {
      transform: translateX(0%);
    }
  }

  &.${activeClass} {
    &::after {
      transform: translateX(0%);
    }
  }
`;

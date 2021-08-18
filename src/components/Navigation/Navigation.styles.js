import styled from 'styled-components';
import { Link } from 'react-scroll';

export const StyledNavigation = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  height: calc(100% - 64px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: calc(25vh - 64px) 0 25vh 0;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: 3;

  font-size: ${({ theme }) => theme.fontSize.logo};

  @media (${({ theme }) => theme.breakpoints.xxl}) {
    flex-direction: row;
    position: static;
    width: 30vw;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
  }
`;

const activeClass = 'active-link';

export const StyledNavLink = styled(Link).attrs({ activeClass })`
  //width: 100vw;
  //margin: 35px 0;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.l};

  @media (${({ theme }) => theme.breakpoints.xxl}) {
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
  }
`;

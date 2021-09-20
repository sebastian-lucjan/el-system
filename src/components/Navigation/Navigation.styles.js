import styled from 'styled-components';
import { Link } from 'react-scroll';

export const StyledNavigation = styled.div`
  // mobile
  position: fixed;
  top: ${({ theme }) => theme.headerHeight};
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: calc(100% - ${({ theme }) => theme.headerHeight});
  overflow: hidden;
  padding: calc(25vh - ${({ theme }) => theme.headerHeight}) 0 25vh 0;
  background-color: ${({ theme }) => theme.colors.black};
  z-index: ${({ theme }) => theme.zIndex.superiorPriority};

  //iPad and large mobile landscape
  @media (${({ theme }) => theme.devices.md}) {
    position: static;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    height: 100%;
    margin-right: ${({ theme }) => theme.baseSpacing};
    padding: 0;
  }

  //Desktop landscape for medium resolution
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    width: 33vw;
  }

  //Desktop landscape for high resolution
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxxl}) {
    width: 25vw;
  }
`;

const activeClass = 'active-link';

export const StyledNavLink = styled(Link).attrs({ activeClass })`
  // mobile small
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.l};

  // mobile medium
  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  //iPad portrait / mobile large landscape
  @media (${({ theme }) => theme.devices.md}) {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.extraLight};
  }

  //Desktop landscape for small resolution like laptop
  @media (${({ theme }) => theme.devices.xl}) {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: ${({ theme }) => theme.baseSpacing} 0;
    cursor: pointer;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;

    &::after {
      display: block;
      content: '';
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.white};
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

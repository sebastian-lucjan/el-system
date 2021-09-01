import styled from 'styled-components';

export const StyledTitle = styled.h1`
  //mobile small
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;

  //mobile medium
  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  //iPad portrait / mobile large landscape
  @media (${({ theme }) => theme.devices.md}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  //Desktop landscape for small resolution like laptop
  @media (${({ theme }) => theme.devices.xl}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  //Desktop landscape for high resolution
  @media (${({ theme }) => theme.devices.xxxl}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }

  //iPad PRO (1366x1024) portrait
  @media (orientation: portrait) and (${({ theme }) => theme.devices.lg}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

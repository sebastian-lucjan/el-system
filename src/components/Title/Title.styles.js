import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;

  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  @media (${({ theme }) => theme.devices.md}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media (${({ theme }) => theme.devices.xl}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }

  @media (${({ theme }) => theme.devices.xxxl}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
  @media (orientation: portrait) and (${({ theme }) => theme.devices.lg}) {
    font-size: ${({ theme }) => theme.fontSize.xxl};
  }
`;

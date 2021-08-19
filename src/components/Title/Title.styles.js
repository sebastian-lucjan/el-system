import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;

  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
  @media (${({ theme }) => theme.devices.xxl}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: 700;
  }
`;

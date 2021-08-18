import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;

  @media (${({ theme }) => theme.breakpoints.xxl}) {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
    font-weight: 700;
  }
`;

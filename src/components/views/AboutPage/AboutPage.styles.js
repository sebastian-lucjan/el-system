import styled from 'styled-components';

export const StyledParagraph = styled.div`
  font-weight: 300;
  text-align: justify;
  margin-bottom: 20px;
  font-size: ${({ theme }) => theme.fontSize.xs};

  @media (${({ theme }) => theme.breakpoints.xxl}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

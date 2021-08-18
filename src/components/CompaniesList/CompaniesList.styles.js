import styled from 'styled-components';

export const StyledCompaniesList = styled.ul`
  width: 100%;

  .listItem {
    margin-bottom: 1.8rem;
    list-style: none;
    font-size: ${({ theme }) => theme.fontSize.logo};
    font-weight: 300;
  }

  @media (${({ theme }) => theme.breakpoints.xxl}) {
    width: 900px;

    .listItem {
      margin-bottom: 2rem;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

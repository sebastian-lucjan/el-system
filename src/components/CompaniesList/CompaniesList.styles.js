import styled from 'styled-components';

export const StyledCompaniesList = styled.ul`
  width: 900px;

  .listItem {
    margin-bottom: 2rem;
    list-style: none;
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 300;
  }
`;

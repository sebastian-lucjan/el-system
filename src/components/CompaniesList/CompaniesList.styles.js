import styled from 'styled-components';

export const StyledCompaniesList = styled.ul`
  width: 100%;

  .listItem {
    margin-bottom: 1.8rem;
    list-style: none;
    //font-size: ${({ theme }) => theme.fontSize.logo};
    font-weight: 300;
  }

  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media (${({ theme }) => theme.devices.sm}) {
    .listItem {
      margin-bottom: 2.2rem;
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }

  @media (${({ theme }) => theme.devices.xxl}) {
    width: 900px;

    .listItem {
      margin-bottom: 2rem;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

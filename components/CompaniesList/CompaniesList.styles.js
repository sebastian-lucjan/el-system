import styled from 'styled-components';

export const StyledCompaniesList = styled.ul`
  //mobile
  width: 100%;
  flex-grow: 1;

  .listItem {
    margin-bottom: 1.8rem;
    list-style: none;
    font-weight: ${({ theme }) => theme.fontWeight.extraLight};
  }

  //mobile medium
  @media (${({ theme }) => theme.devices.xs}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  //mobile large
  @media (${({ theme }) => theme.devices.sm}) {
    .listItem {
      margin-bottom: 2.2rem;
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }

  //Desktop landscape for medium resolution
  @media (${({ theme }) => theme.devices.xxl}) {
    width: 900px;

    .listItem {
      margin-bottom: 2rem;
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

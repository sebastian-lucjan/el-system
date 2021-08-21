import styled from 'styled-components';

export const ViewWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 84px 20px 20px 20px;

  @media (${({ theme }) => theme.devices.md}) {
    padding: 105px 20px 20px 20px;
  }

  @media (${({ theme }) => theme.devices.xxl}) {
    padding: 100px;
    line-height: 24px;
  }
`;

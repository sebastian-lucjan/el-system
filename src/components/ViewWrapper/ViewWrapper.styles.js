import styled from 'styled-components';

export const ViewWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  //position: relative;
  justify-content: center;
  //align-items: ${({ centered }) => (centered ? 'centered' : 'flex-start')};
  //align-items: flex-start;
  padding: 84px 20px 20px 20px;

  @media (${({ theme }) => theme.devices.md}) {
    padding: 105px 20px 20px 20px;
  }

  @media (${({ theme }) => theme.devices.xxl}) {
    padding: 100px;
    line-height: 24px;
  }
`;

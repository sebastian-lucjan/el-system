import styled from 'styled-components';

export const ViewWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: ${({ centered }) => (centered ? 'centered' : 'flex-start')};
  padding: 84px 20px 20px 20px;

  @media (${({ theme }) => theme.devices.xxl}) {
    padding: 100px;
    line-height: 24px;
  }
`;

import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.4rem;

  @media (${({ theme }) => theme.devices.xs}) {
    width: 400px;
  }

  @media (${({ theme }) => theme.devices.md}) {
    justify-content: center;
    transform: translateY(-50px);
  }

  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    width: 600px;
    padding-top: 60px;
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.md}) {
    width: 80vh;
    padding-top: 8vh;
  }

  @media (${({ theme }) => theme.devices.xxl}) {
    width: 900px;
    justify-content: center;
  }
`;

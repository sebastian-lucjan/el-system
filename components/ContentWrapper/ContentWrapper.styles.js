import styled from 'styled-components';

const ContentWrapper = styled.section`
  // mobile small
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 1.4rem;

  // mobile medium
  @media (${({ theme }) => theme.devices.xs}) {
    width: 400px;
  }
  // iPad and large mobile landscape
  @media (${({ theme }) => theme.devices.md}) {
    justify-content: center;
    transform: translateY(-50px);
  }

  //iPad portrait
  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    width: 600px;
    padding-top: 60px;
  }

  // landscape default
  @media (orientation: landscape) {
    width: 60vw;
  }

  //iPad and large mobile landscape
  @media (orientation: landscape) and (${({ theme }) => theme.devices.md}) {
    width: 80vw;
    padding-top: 8vh;
  }

  //iPad PRO (1366x1024) landscape
  @media (${({ theme }) => theme.devices.xl}) {
    width: 900px;
    justify-content: center;
  }
`;

export default ContentWrapper;

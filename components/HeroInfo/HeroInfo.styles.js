import styled from 'styled-components';
import { size } from '../../styles/theme';

const maxResolutionFullSlider = `max-width: ${size.width.xxl}px`;

const Wrapper = styled.div`
  // base
  position: relative;
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 120px 60px 120px 120px;

  //iPad and large mobile landscape
  @media (orientation: landscape) and (${({ theme }) => theme.devices.md}) and (${maxResolutionFullSlider}) {
    width: 100%;
    height: ${({ theme }) => theme.headerHeight};
    padding: 0 ${({ theme }) => theme.baseSpacing};
  }

  //iPad portrait
  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    width: 100%;
    height: 12vh;
    padding: 0 ${({ theme }) => theme.baseSpacing};
  }

  //iPad PRO (1366x1024) landscape
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    width: 50vw;
    height: 50vh;
    flex-direction: column;
    padding: 110px 60px 110px 120px;
  }

  //Desktop landscape for small resolution like laptop
  @media (${({ theme }) =>
      theme.devices.xl}) and (${`max-width: ${size.width.xxl}px`}) and (${`max-height: ${size.width.md}px`}) {
    padding: 60px 60px 60px 120px;
  }

  //Desktop landscape for small resolution

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) and (${`max-height: ${size.width.lg}px`}) {
    padding: 60px 60px 60px 120px;
  }

  //Desktop landscape for medium resolution
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxl}) {
    padding: 100px 160px 100px 160px;
  }

  //MacBook Air 13" (1440x900) landscape
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxl}) and (${`max-height: ${size.width.lg}px`}) {
    width: 50vw;
    height: 50vh;
    flex-direction: column;
    padding: 60px 60px 60px 120px;
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) and (${`max-height: ${size.width.md}px`}) {
    padding: 50px 60px 50px 120px;
  }

  //Desktop landscape for high resolution
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxxl}) {
    padding: 140px 160px;
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxxl}) and (${'max-height: 1079px'}) {
    padding: 120px 160px;
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxxl}) and (${'max-height: 940px'}) {
    padding: 100px 160px;
  }
`;

export default Wrapper;

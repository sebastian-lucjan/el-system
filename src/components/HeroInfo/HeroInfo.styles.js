import styled from 'styled-components';
import { size } from '../../assets/styles/theme';

const maxResolutionFullSlider = `max-width: ${size.width.xxl}px`;

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 130px 65px 130px 130px;

  //iPad and large mobile landscape
  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    width: 100%;
    height: 64px;
    padding: 0 20px;
  }

  //iPad portrait
  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    width: 100%;
    height: 12vh;
    padding: 0 20px;
  }

  //iPad PRO (1366x1024) landscape
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    width: 50%;
    height: 50vh;
    flex-direction: column;
    padding: 130px 65px 130px 130px;
  }

  //Desktop landscape for small resolution like laptop
  @media (${({ theme }) =>
      theme.devices
        .xl}) and (${`max-width: ${size.width.xxl}px`}) and (${`max-height: ${size.width.md}px`}) {
    padding: 65px 65px 65px 130px;
  }

  //Desktop landscape for medium resolutions
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxl}) {
    padding: 100px 160px 100px 160px;
  }

  //Desktop landscape for high resolutions
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxxl}) {
    padding: 160px;
  }
`;

export default Wrapper;

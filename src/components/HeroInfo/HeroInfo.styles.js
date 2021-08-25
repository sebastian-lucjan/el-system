import styled from 'styled-components';
import { size } from '../../assets/styles/theme';

const maxResolutionFullSlider = `max-width: ${size.xxl}px`;

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 130px 65px 130px 130px;

  //iPad horizontal
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

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    width: 50%;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 90px 65px 90px 130px;
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxl}) {
    padding: 100px 160px 100px 160px;
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xxxl}) {
    padding: 160px 160px 160px 160px;
  }
`;

export default Wrapper;

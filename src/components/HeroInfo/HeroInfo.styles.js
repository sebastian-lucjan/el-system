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
  padding: 130px;

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
    padding: 130px;
  }
`;

export default Wrapper;

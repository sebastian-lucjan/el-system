import styled from 'styled-components';
import { size } from '../../assets/styles/theme';

const maxResolutionFullSlider = `max-width: ${size.xxl}px`;

const Wrapper = styled.div`
  position: relative;
  width: 50vw;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 130px;

  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
  }

  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    width: 100vw;
    height: 64px;
    padding: 0 20px;
  }
`;

export default Wrapper;

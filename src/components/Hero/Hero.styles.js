import styled from 'styled-components';
import { size } from '../../assets/styles/theme';

const maxResolutionFullSlider = `max-width: ${size.xxl}px`;

const StyledHero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25vh;
  width: 100vw;
  height: 50vh;

  // @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
  //
  // }
  //
  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    top: 64px;
    flex-direction: column-reverse;
    justify-content: space-between;
    height: calc(100vh - 64px);
  }
`;

export default StyledHero;

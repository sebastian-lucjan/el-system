import styled from 'styled-components';
import { maxResolutionFullSlider } from '../../styles/theme';

const StyledHero = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25vh;
  width: 100%;
  height: 50vh;

  //iPad and large mobile landscape
  @media (orientation: landscape) and (${({ theme }) => theme.devices.md}) and (${maxResolutionFullSlider}) {
    top: ${({ theme }) => theme.headerHeight};
    flex-direction: column-reverse;
    justify-content: space-between;
    height: calc(100vh - 64px);
  }

  //iPad portrait
  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    top: 10vh;
    flex-direction: column-reverse;
    justify-content: space-between;
    height: 80vh;
  }
`;

export default StyledHero;

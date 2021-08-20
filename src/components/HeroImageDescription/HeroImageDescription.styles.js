import styled from 'styled-components';
import { size } from '../../assets/styles/theme';

const maxResolutionFullSlider = `max-width: ${size.xxl}px`;

const StyledHeroImageDescription = styled.div`
  //padding-top: 30px;
  //padding-left: 20px;
  width: 80%;
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 0.5px;
  font-weight: 300;

  // @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
  // }

  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    //width: 100vw;
    display: none;
  }
`;

export default StyledHeroImageDescription;

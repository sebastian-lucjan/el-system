import styled from 'styled-components';
import { size } from '../../assets/styles/theme';

const maxResolutionFullSlider = `max-width: ${size.xxl}px`;

const StyledHeroImageDescription = styled.div`
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  letter-spacing: 0.5px;
  font-weight: 300;

  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    display: none;
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    display: block;
  }
`;

export default StyledHeroImageDescription;

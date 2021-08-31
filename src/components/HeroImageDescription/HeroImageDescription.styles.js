import styled from 'styled-components';
import { size, maxResolutionFullSlider } from '../../assets/styles/theme';

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

  //Desktop landscape for small resolution like laptop
  @media (${({ theme }) =>
      theme.devices
        .xl}) and (${`max-width: ${size.width.xxl}px`}) and (${`max-height: ${size.width.md}px`}) {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

export default StyledHeroImageDescription;

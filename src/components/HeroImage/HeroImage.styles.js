import styled from 'styled-components';
import { size } from '../../assets/styles/theme';

const maxResolutionFullSlider = `max-width: ${size.xxl}px`;

const StyledHeroImage = styled.div`
  width: 50vw;
  height: 100%;
  overflow: hidden;

  .hero-image__image {
    position: relative;
    width: calc(50vw - 20px);
    padding-right: 20px;
    height: 50vh;
    object-fit: cover;
    object-position: left bottom;
  }
  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
  }

  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    width: 100vw;
    .hero-image__image {
      height: 100%;
      padding: 0 20px;
    }
  }
`;

export default StyledHeroImage;

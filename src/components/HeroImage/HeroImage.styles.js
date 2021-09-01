import styled from 'styled-components';
import { size, maxResolutionFullSlider } from '../../assets/styles/theme';

console.log(maxResolutionFullSlider);

const StyledHeroImage = styled.div`
  width: 50vw;
  height: 100%;
  overflow: hidden;

  .hero-image__image {
    position: relative;
    width: calc(50vw - 20px);
    padding-right: 20px;
    height: calc(100vh - 128px);
    object-fit: cover;
    object-position: left bottom;
  }
  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    width: 100vw;
    .hero-image__image {
      height: 60vh;
      object-position: left bottom;
      padding: 0 20px;
    }
  }

  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    width: 100vw;
    object-position: left bottom;

    .hero-image__image {
      padding: 0 20px;
    }
  }

  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    .hero-image__image {
      width: 50vw;
      height: 50vh;
      padding: 0 20px 0 0;
    }
  }
`;

export default StyledHeroImage;

import styled from 'styled-components';
import { maxResolutionFullSlider } from '../../styles/theme';

const StyledHeroImage = styled.div`
  //base
  width: 50%;
  height: 100%;
  overflow: hidden;
  .slider__wrapper {
    position: relative;
  }
  .hero-image__image {
    width: 100%;
    margin-right: 30px;
    height: calc(100vh - 128px);
    object-fit: cover;
    object-position: left bottom;
  }

  //iPad portrait
  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    width: 100%;
    .hero-image__image {
      height: 60vh;
      object-position: left bottom;
      padding: 0 30px;
    }
  }

  //iPad and large mobile landscape
  @media (orientation: landscape) and (${({ theme }) => theme.devices.md}) and (${maxResolutionFullSlider}) {
    width: 100%;
    object-position: left bottom;

    .hero-image__image {
      padding: 0 30px;
    }
  }

  //Desktop landscape for small resolution like laptop
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    padding: 0 30px 0 0;
    .hero-image__image {
      width: 50%;
      height: 50vh;
    }
  }
`;

export default StyledHeroImage;

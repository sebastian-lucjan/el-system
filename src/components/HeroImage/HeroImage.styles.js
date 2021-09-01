import styled from 'styled-components';
import { maxResolutionFullSlider } from '../../assets/styles/theme';

const StyledHeroImage = styled.div`
  //mobile
  width: 50vw;
  height: 100%;
  overflow: hidden;

  .hero-image__image {
    position: relative;
    width: calc(50vw - ${({ theme }) => theme.baseSpacing});
    padding-right: ${({ theme }) => theme.baseSpacing};
    height: calc(100vh - 128px);
    object-fit: cover;
    object-position: left bottom;
  }

  //iPad portrait
  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}) {
    width: 100vw;
    .hero-image__image {
      height: 60vh;
      object-position: left bottom;
      padding: 0 ${({ theme }) => theme.baseSpacing};
    }
  }

  //iPad and large mobile landscape
  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    width: 100vw;
    object-position: left bottom;

    .hero-image__image {
      padding: 0 ${({ theme }) => theme.baseSpacing};
    }
  }

  //Desktop landscape for small resolution like laptop
  @media (orientation: landscape) and (${({ theme }) => theme.devices.xl}) {
    .hero-image__image {
      width: 50vw;
      height: 50vh;
      padding: 0 ${({ theme }) => theme.baseSpacing} 0 0;
    }
  }
`;

export default StyledHeroImage;

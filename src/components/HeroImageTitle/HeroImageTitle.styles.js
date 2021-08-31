import styled from 'styled-components';
import { size, maxResolutionFullSlider } from '../../assets/styles/theme';

const StyledHeroImageTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 300;

  @media (orientation: landscape) and (${({ theme }) =>
      theme.devices.md}) and (${maxResolutionFullSlider}) {
    display: flex;
    align-items: center;
    height: 64px;
  }
`;

export default StyledHeroImageTitle;

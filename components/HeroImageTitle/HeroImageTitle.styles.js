import styled from 'styled-components';
import { size, maxResolutionFullSlider } from 'styles/theme';

const StyledHeroImageTitle = styled.div`
  font-size: ${({ theme, smaller }) => (smaller ? theme.fontSize.l : theme.fontSize.xl)};
  font-weight: ${({ theme }) => theme.fontWeight.extraLight};

  @media (orientation: landscape) and (${({ theme }) => theme.devices.md}) and (${maxResolutionFullSlider}) {
    display: flex;
    align-items: center;
    height: ${({ theme }) => theme.headerHeight};
  }
`;

export default StyledHeroImageTitle;

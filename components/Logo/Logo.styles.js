import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledLogo = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.fontSize.l};
  letter-spacing: 2px;
  margin: ${({ theme }) => theme.baseSpacing};
  cursor: default;
  color: white;
  text-decoration: none;

  @media (orientation: portrait), (orientation: landscape) and (${({ theme }) => theme.devices.md}) {
    margin-left: 24px;
  }

  @media (orientation: portrait) and (${({ theme }) => theme.devices.md}),
    (orientation: landscape) and (${({ theme }) => theme.devices.md}) and (max-width: 1199px) {
    margin-left: 30px;
  }
`;

export default StyledLogo;

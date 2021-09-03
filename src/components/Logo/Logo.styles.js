import styled from 'styled-components';
import { Link } from 'react-scroll';

const StyledLogo = styled(Link)`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.fontSize.l};
  margin: ${({ theme }) => theme.baseSpacing};
  cursor: default;
`;

export default StyledLogo;

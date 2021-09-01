import styled from 'styled-components';

const StyledLogo = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: ${({ theme }) => theme.fontSize.l};
  margin: ${({ theme }) => theme.baseSpacing};
`;

export default StyledLogo;

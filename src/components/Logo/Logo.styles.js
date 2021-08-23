import styled from 'styled-components';

const StyledLogo = styled.div`
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSize.l};
  line-height: 24px;
  margin: 20px;
`;

export default StyledLogo;

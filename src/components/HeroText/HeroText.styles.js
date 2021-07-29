import styled from 'styled-components';

const StyledHeroText = styled.div`
  position: absolute;
  top: 140px;
  left: 140px;
  margin-right: 140px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
`;

export default StyledHeroText;

// fontSize: {
//   s: '12px',
//     m: '16px',
//     l: '18px',
//     logo: '24px',
//     xl: '36px',
// },

import styled from 'styled-components';

const StyledOfferItemTitle = styled.h3`
  font-weight: ${({ activeOfferDescription, theme: { fontWeight } }) =>
    activeOfferDescription ? fontWeight.light : fontWeight.extraLight};
  width: 100%;
  cursor: pointer;

  //iPad
  @media (${({ theme }) => theme.devices.md}) {
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    cursor: text;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export default StyledOfferItemTitle;

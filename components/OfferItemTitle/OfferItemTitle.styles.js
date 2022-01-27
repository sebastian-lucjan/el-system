import styled from 'styled-components';

const StyledOfferItemTitle = styled.h3`
  font-weight: ${({ activeOfferDescription, theme: { fontWeight } }) =>
    activeOfferDescription ? fontWeight.light : fontWeight.extraLight};
  width: 100%;
  cursor: pointer;
  text-align: left;
  line-height: 16px;
  //iPad
  @media (${({ theme }) => theme.devices.md}) {
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 10px;
    font-weight: ${({ theme }) => theme.fontWeight.light};
    line-height: 28px;
    cursor: text;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media (${({ theme }) => theme.devices.lg}) {
    text-align: justify;
  }
`;

export default StyledOfferItemTitle;

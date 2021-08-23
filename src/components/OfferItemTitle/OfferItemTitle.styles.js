import styled from 'styled-components';

const StyledOfferItemTitle = styled.div`
  font-weight: ${({ activeOfferDescription }) =>
    activeOfferDescription ? 400 : 300};
  width: 100%;
  cursor: pointer;

  @media (${({ theme }) => theme.devices.md}) {
    // font-size: ${({ theme }) => theme.fontSize.s};
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding-bottom: 10px;
    font-weight: 400;
  }
`;

export default StyledOfferItemTitle;

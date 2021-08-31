import styled from 'styled-components';

const StyledOfferItemDescription = styled.div`
  //mobile
  font-weight: ${({ theme }) => theme.fontWeight.extraLight};
  padding: 10px 0 0 30px;

  .offerItem__othersList {
    list-style: disc;
    transform: translateX(${({ theme }) => theme.baseSpacing});
  }

  //iPad and large mobile landscape
  @media (${({ theme }) => theme.devices.md}) {
    padding: 10px 0;
  }

  //Desktop landscape for medium resolution
  @media (${({ theme }) => theme.devices.xxl}) {
    padding: 0;

    .offerItem__othersList {
      transform: translateX(${({ theme }) => theme.baseSpacing});
    }
  }
`;

export default StyledOfferItemDescription;
